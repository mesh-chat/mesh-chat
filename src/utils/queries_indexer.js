export const messageQuery = (from, to) => {
    const body =  "messages(where:{from_:{id:" + "\\\"" + from + "\\\"" +  "} to_:{id:" + "\\\"" + to +  "\\\"" + "}}) {timestamp message_text}"
    return "{\"query\": \"{" + body + "}\"}"
}

export const contactQuery = (account_id)  => {
    const body =  "contacts(where:{id:" + "\\\"" + account_id + "\\\"" +  "}) {id}"
    return "{\"query\": \"{" + body + "}\"}"
}