import React, {useState} from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './Main.css'
import MyButton from "../../component/myButton/MyButton";

interface ChildProps {
    contacts: any[]
    deleteContactHandle: (id: string) => void
    showEditModalWindow: (modal: boolean) => void
}

const Main: React.FC<ChildProps> = (props) => {

    const [idDelete, setIdDelete] = useState()
    const [deleteModalWindow, setDeleteModalWindow] = useState<boolean>(false)

    const clickDeleteModal = (id) => {
        setDeleteModalWindow(true)
        setIdDelete(id)
    }

    function onDeleteConfirmed() {
        setDeleteModalWindow(false)
        props.deleteContactHandle(idDelete)
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
                                onClick={() => onDeleteConfirmed()}
                            />
                            <MyButton
                                title='Отмена'
                                cls='add'
                                onClick={() => setDeleteModalWindow(false)}
                            />
                        </div>
                        : ''
                }
                {props.contacts.map(contact => {
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
                                    onClick={() => props.showEditModalWindow(contact)}
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