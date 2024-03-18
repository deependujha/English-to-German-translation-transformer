import { stat } from "fs";

export async function POST( request: Request ) {
    try {
        const res = await request.json()
        const sentence_to_be_translated = res[ 'sentence' ]
        console.log( `Sentence to be translated: ${sentence_to_be_translated}` )

        return Response.json( {
            "translation": "लव इज इन द एयर"
        }, { status: 200 } )
    }
    catch ( err ) {
        let msg = ""
        if ( err instanceof Error ) {
            msg = err.message
        }
        else {
            msg = String( err )
        }
        return Response.json( {
            "status": "Error translating sentence",
            "error": msg
        }, { status: 400 } )
    }


}