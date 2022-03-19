import React, {useState} from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './Main.css'
import MyButton from "../../component/myButton/MyButton";

const Main = ({
                  contacts,
                  deleteContactHandle,
                  setDeleteModalWindow,
                  deleteModalWindow,
                  showEditModalWindow
              }) => {

    const [idDelete, setIdDelete] = useState()

    const clickDeleteModal = (id) => {
        setDeleteModalWindow()
        setIdDelete(id)
    }

    return (
        <div className='main'>
            <div className='container-contacts'>
                {
                    deleteModalWindow === true
                        ? <div className='deleteModal'>
                            <MyButton
                                title='Удалить'
                                cls='cancel'
                                onClick={() => deleteContactHandle(idDelete)}
                            />
                            <MyButton
                                title='Отмена'
                                cls='add'
                                onClick={() => setDeleteModalWindow()}
                            />
                        </div>
                        : ''
                }
                {contacts.map(contact => {
                    return (
                        <div
                            className='container-contact'
                            key={contact.id}
                        >
                            <div className='number'>{contact.number}</div>
                            <div className='phone'>{contact.name}</div>
                            <div className='icons'>
                                <EditIcon
                                    className='edit'
                                    onClick={() => showEditModalWindow(contact.id)}
                                />
                                <DeleteIcon
                                    className='delete'
                                    onClick={() => clickDeleteModal(contact.id)}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Main