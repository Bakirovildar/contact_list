import React, {useState} from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './Main.css'
import MyButton from "../../component/myButton/MyButton";

interface ChildProps {
    contacts: any[]
    deleteContactHandle: (id: string) => void
    setDeleteModalWindow: () => void
    deleteModalWindow: boolean
    showEditModalWindow: (modal: boolean) => void

}

const Main: React.FC<ChildProps> = (props) => {

    const [idDelete, setIdDelete] = useState()

    const clickDeleteModal = (id) => {
        props.setDeleteModalWindow()
        setIdDelete(id)
    }

    return (
        <div className='main'>
            <div className='container-contacts'>
                {
                    props.deleteModalWindow === true
                        ? <div className='deleteModal'>
                            <MyButton
                                title='Удалить'
                                cls='cancel'
                                onClick={() => props.deleteContactHandle(idDelete)}
                            />
                            <MyButton
                                title='Отмена'
                                cls='add'
                                onClick={() => props.setDeleteModalWindow()}
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