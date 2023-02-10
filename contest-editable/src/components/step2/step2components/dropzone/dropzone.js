import React, {useCallback, useState, useEffect} from 'react';
import {useDropzone} from 'react-dropzone';
import "./dropzone.scss";
import {showNoty} from '../../../../../../../helpers';
import {ImageWithCropper} from '../ImageWithCropper/ImageWithCropper';
import {useDispatch, useSelector} from 'react-redux';
import $ from 'jquery';
import {addTemporarilyImage_action, firstSendingImage_action} from '../../../../actions/actions';
import {getImageToUri} from '../../../../../../../helpers';

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': app.token,
    },
});
function SimpleDropZone({children}) {
    //const addElem = useSelector(state=>state.backData.resources.work.add_element);
    const workId = useSelector(state=>state.idWorkForEmptyUrl);
    const dispatch = useDispatch()
    const [photoArray, setPhotoArray] = useState([]);
    const temporarilyImagesArr = useSelector(state=>state.temporarilyImage)

  const onDrop = useCallback((acceptedFiles, rejFiles) => {
      if (rejFiles.length > 0){
        showNoty("error", "Допускаются только фотографии")
      }

          const formDataI = new FormData();
          formDataI.append('work_id',+workId);
          formDataI.append( 'type','image');
          formDataI.append( 'file',acceptedFiles[0]);

          dispatch(firstSendingImage_action());

          $.ajax({
              method:'post',
              url:`/api/works/element/store`,
              data:formDataI,
              processData: false,
              contentType: false,
              success:(e)=> {
                  const srcLink = getImageToUri(e.success.image[0], `resize/768-0`);
                  console.log(e);
                  showNoty("success", e.message);
                  dispatch(addTemporarilyImage_action(e.success))
                  dispatch(firstSendingImage_action());
                  acceptedFiles.forEach((file) => {
                      const reader = new FileReader();
                      reader.onabort = () => console.log('file reading was aborted');
                      reader.onerror = () => console.log('file reading has failed');
                      reader.onload = () => {
                          setPhotoArray(acceptedFiles.map(file => Object.assign(file, {
                              preview:srcLink,
                          })));

                          // Do whatever you want with the file contents
                          const binaryStr = reader.result;
                          let message = document.querySelector(".dz-clickable");
                          message.style.display = "none";
                      }
                      reader.readAsArrayBuffer(file);
                  });

                  //dispatch(addCkeditor_action(e.success));
              },
              error:(error)=>{
                  showNoty("error", error.responseJSON.message)
                  console.log(error)
              },
          });
  }, []);

  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop
  });
  return (
    <main style={{maxWidth:"300px", position:"relative"}}>
      <div {...getRootProps()}>
        {children}
        <input {...getInputProps()} multiple={false}/>
      </div>

      {photoArray.length > 0 && <ImageWithCropper photoArray={photoArray}/>}
    </main>

 )
}
export default SimpleDropZone;
