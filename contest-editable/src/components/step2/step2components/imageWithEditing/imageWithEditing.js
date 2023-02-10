import React from 'react';
import "./imageWithEditing.scss";
import {ReactSVG} from 'react-svg';
import GetImageToUri from '../../../../../../../GetImageToUri';
import $ from 'jquery';
import {getImageToUri, showNoty} from '../../../../../../../helpers';
import {changeCropData_action, openModalDropzone_action, removeElementOfEditors_action, sendCkeditorData_action} from '../../../../actions/actions';
import {useDispatch, useSelector} from 'react-redux';


/*ImageWithEditing в этом компоненте будет кнопка удаления изображения при наведении+
+ кнопка редактирования,
при редактировании изображения берется id этого изображения и отправляется на сервер с целью получения
оригинальной фотки, когда ответ успешен открывается модалка вместе с cropper, где пользователь может изменить
изображение. При нажатии сохранить изоброжение старое изображение заменятся на новое id должен быть одинаковым
и закрывается модалка.
При удалении изображения с самого компонента отправляется id для удаления оригинального изображения и
обрезанного изображения.
*/

export const ImageWithEditing = ({id,index, srcUrl})=>{
    const dispatch = useDispatch();
    const ckData = useSelector(state => state.editors);

    const removeImageFunc = function(){
        $.ajax({
            method:'DELETE',
            url:`/api/works/element/${+ckData[index].id}/delete`,
            success:(e)=> {

                //console.log(e);
                showNoty("success", e.message);
                console.log(ckData[index].id);
                dispatch(removeElementOfEditors_action(ckData[index].id));
            },
            error:(error)=>{
                showNoty("error", error.responseJSON.message)
                console.log(error)
            },
        });

    };
    const updateCroppedImages = function(id){
        dispatch(openModalDropzone_action());
        const el = ckData.find(el=>el.id == id);
        //console.log(getImageToUri(el.image[0], `resize/400-300`), id);
        dispatch(changeCropData_action(el));
    }
  return (
    <section data-id={id} data-index={index} className={"imageWithEditing"}>
        <GetImageToUri latest={true} image={srcUrl[0]} params={`cover/746`}/>
      <div className="imageWithEditing__btnS">
      <button className="imageWithEditing__edit" onClick={()=>updateCroppedImages(id)}>
        <span>Редактировать</span>
      </button>
      <button type={'button'} onClick={removeImageFunc} className="imageWithEditing__remove">
        <ReactSVG src={"/icons/contest-icons/removeImage.svg"} wrapper={"span"}/>
      </button>
    </div>
    </section>
  )
}
