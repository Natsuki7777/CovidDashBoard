import { NextPage} from "next";
import { firestore } from "../../firestore/client";
import {doc,getDoc} from "firebase/firestore"
import { Props } from "next/script";
import { useState,useEffect } from "react";


export const getStaticProps = async()=>{
    const docRef = doc(firestore,"deathCase", "2020-05-10")
    const deathCase= await (await getDoc(docRef)).data();
    const data = await JSON.stringify(deathCase)
    return{
        props:{
            data
        }
    }
}

const Detail:NextPage<Props>=(props)=>{
    const detail =JSON.parse(props.data)
    console.log(typeof(detail))
    return(
        <div>
            {detail["ALL"]}
        </div>
        
    )
}

export default Detail