import { stat } from "fs";
import axios from "axios";
import { NextResponse } from 'next/server'

export async function POST( request: Request ) {
    try {
        const res = await request.json()
        const sentence_to_be_translated = res[ 'sentence' ]
        // console.log( `Sentence to be translated: ${sentence_to_be_translated}` )

        const result = await axios.post( "http://backend/translate", {
            "english_sentence": sentence_to_be_translated
        } )

        return NextResponse.json( result.data, { status: 200 } )
    }
    catch ( err ) {
        let msg = ""
        if ( err instanceof Error ) {
            msg = err.message
        }
        else {
            msg = String( err )
        }
        return NextResponse.json( {
            "status": "Error translating sentence",
            "error": msg
        }, { status: 400 } )
    }


}
