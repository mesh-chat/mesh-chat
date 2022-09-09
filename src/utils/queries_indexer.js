export const messageQuery = (from, to) => {
    const body =  "messages(where:{from_:{id:" + "\\\"" + from + "\\\"" +  "} to_:{id:" + "\\\"" + to +  "\\\"" + "}}) {timestamp message_text}"
    return "{\"query\": \"{" + body + "}\"}"
}