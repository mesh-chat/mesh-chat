import {ContactDetails, ContactTitle, ContactView} from "./ContactStyles";

export const Contact = ({ name, phoneNumbers }) => {
    return (
        <ContactView>
            <ContactDetails>
                <ContactTitle>{ name }</ContactTitle>
                <ContactTitle>{ phoneNumbers }</ContactTitle>
            </ContactDetails>
        </ContactView>)
}