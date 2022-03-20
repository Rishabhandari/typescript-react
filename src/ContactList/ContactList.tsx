
export default function ContactList(props ) {
    return (
        <div>
            {props.contacts.map((contact) => { return contact.name })}
        </div>
    )
}
