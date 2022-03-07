import { NextPage} from "next";
import { firestore } from "../../firestore/client";
import {doc,getDoc,collection,getDocs, query, limit} from "firebase/firestore"

interface Todoufuken{
ALL:Number,
Aichi:Number,
Akita:Number,
Aomori:Number,
Chiba:Number,
Ehime:Number,
Fukui:Number,
Fukuoka:Number,
Fukushima:Number,
Gifu:Number,
Gunma:Number,
Hiroshima:Number,
Hokkaido:Number,
Hyogo:Number,
Ibaraki:Number,
Ishikawa:Number,
Iwate:Number,
Kagawa:Number,
Kagoshima:Number,
Kanagawa:Number,
Kochi:Number,
Kumamoto:Number,
Kyoto:Number,
Mie:Number,
Miyagi:Number,
Miyazaki:Number,
Nagano:Number,
Nagasaki:Number,
Nara:Number,
Niigata:Number,
Oita:Number,
Okayama:Number,
Okinawa:Number,
Osaka:Number,
Saga:Number,
Saitama:Number,
Shiga:Number,
Shimane:Number,
Shizuoka:Number,
Tochigi:Number,
Tokushima:Number,
Tokyo:Number,
Tottori:Number,
Toyama:Number,
Wakayama:Number,
Yamagata:Number,
Yamaguchi:Number,
Yamanashi:Number,
    }
interface Props{
    data:[Todoufuken],
}

export const getStaticProps = async()=>{
    const deathcasecollection = await collection(firestore,"deathCase")
    const deathcasequery = await query(deathcasecollection,limit(10))
    const deathcasequerySnapshot = await getDocs(deathcasequery)
    let deathcaseList:any[] = []
    deathcasequerySnapshot.forEach((doc)=>{
        deathcaseList.push(doc.data())
    })

    return{
        props:{
            deathcaseList
        }
    }
}

const Detail:NextPage<Props>=(props)=>{
    console.log(props.deathcaseList)
    const deathcaseList:any[] = props.deathcaseList
    // make table for each todouhuken
    console.log(deathcaseList)
    const deathcasetable = deathcaseList.map((deathcase:Todoufuken)=>{
        return(
            <tr>
                <td>{deathcase.ALL}</td>
                <td>{deathcase.Aichi}</td>
                <td>{deathcase.Akita}</td>
                <td>{deathcase.Aomori}</td>
                <td>{deathcase.Chiba}</td>
                <td>{deathcase.Ehime}</td>
                <td>{deathcase.Fukui}</td>
                <td>{deathcase.Fukuoka}</td>
                <td>{deathcase.Fukushima}</td>
                <td>{deathcase.Gifu}</td>
                <td>{deathcase.Gunma}</td>
                <td>{deathcase.Hiroshima}</td>
                <td>{deathcase.Hokkaido}</td>
                <td>{deathcase.Hyogo}</td>
                <td>{deathcase.Ibaraki}</td>
                <td>{deathcase.Ishikawa}</td>
                <td>{deathcase.Iwate}</td>
                <td>{deathcase.Kagawa}</td>
                <td>{deathcase.Kagoshima}</td>
                <td>{deathcase.Kanagawa}</td>
                <td>{deathcase.Kochi}</td>
                <td>{deathcase.Kumamoto}</td>
                <td>{deathcase.Kyoto}</td>
                <td>{deathcase.Mie}</td>
                <td>{deathcase.Miyagi}</td>
                <td>{deathcase.Miyazaki}</td>
                <td>{deathcase.Nagano}</td>
                <td>{deathcase.Nagasaki}</td>
                <td>{deathcase.Nara}</td>
                <td>{deathcase.Niigata}</td>
                <td>{deathcase.Oita}</td>
                <td>{deathcase.Okayama}</td>
                <td>{deathcase.Okinawa}</td>
                <td>{deathcase.Osaka}</td>
                <td>{deathcase.Saga}</td>
                <td>{deathcase.Saitama}</td>
                <td>{deathcase.Shiga}</td>
                </tr>
        )
    })
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ALL</th>
                        <th>Aichi</th>
                        <th>Akita</th>
                        <th>Aomori</th>
                        <th>Chiba</th>
                        <th>Ehime</th>
                        <th>Fukui</th>
                        <th>Fukuoka</th>
                        <th>Fukushima</th>
                        <th>Gifu</th>
                        <th>Gunma</th>
                        <th>Hiroshima</th>
                        <th>Hokkaido</th>
                        <th>Hyogo</th>
                        <th>Ibaraki</th>
                        <th>Ishikawa</th>
                        <th>Iwate</th>
                        <th>Kagawa</th>
                        <th>Kagoshima</th>
                        <th>Kanagawa</th>
                        <th>Kochi</th>
                        <th>Kumamoto</th>
                        <th>Kyoto</th>
                        <th>Mie</th>
                        <th>Miyagi</th>
                        <th>Miyazaki</th>
                        <th>Nagano</th>
                        <th>Nagasaki</th>
                        <th>Nara</th>
                        <th>Niigata</th>
                        <th>Oita</th>
                        <th>Okayama</th>
                        <th>Okinawa</th>
                        <th>Osaka</th>
                        <th>Saga</th>
                        <th>Saitama</th>
                        <th>Shiga</th>
                    </tr>
                </thead>
                <tbody>
                    {deathcasetable}
                </tbody>
            </table>
        </div>
    )
}

export default Detail