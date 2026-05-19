// const extractJson = async (text) => {
//     if (!text) {
//         return
//     }
//     const cleaned = text.
//          replace(/```json/gi, "")
//         .replace(/```/g, "")
//         .trim();

//         const firstBrace=cleaned.indexOf('{')
//         const closeBrace=cleaned.lastIndexOf('}')
//         if(firstBrace===-1 || closeBrace==-1)return null
//         const jsonString=cleaned.slice(firstBrace,closeBrace+1)
//         return JSON.parse(jsonString)

// }
// export default extractJson

const extractJson = async (text) => {
    if (!text) return null;

    const cleaned = text
        .replace(/```json/gi, "")
        .replace(/```/g, "")
        .trim();

    const firstBrace = cleaned.indexOf('{');
    const lastBrace = cleaned.lastIndexOf('}');
    if (firstBrace === -1 || lastBrace === -1) return null;

    let jsonString = cleaned.slice(firstBrace, lastBrace + 1);

    try {
        return JSON.parse(jsonString);
    } catch (e) {
        // Extract message and code manually using regex
        try {
            const messageMatch = jsonString.match(/"message"\s*:\s*"(.*?)(?<!\\)"/s);
            const codeMatch = jsonString.match(/"code"\s*:\s*"([\s\S]*)"(?:\s*}?\s*)$/);

            if (!codeMatch) return null;

            const message = messageMatch ? messageMatch[1] : "Website generated";
            let code = codeMatch[1]
                .replace(/\\n/g, "\n")
                .replace(/\\t/g, "\t")
                .replace(/\\"/g, '"')
                .replace(/\\\\/g, "\\");

            return { message, code };
        } catch (e2) {
            return null;
        }
    }
};

export default extractJson;