import Head from 'next/head'
import styles from '../styles/Mitgliederbereich.module.css'
import Title from '../components/title/Title.js'
import PageContainer from '../components/container/PageContainer.js'
import ContentContainer from '../components/container/ContentContainer.js'
import SectionContainer from '../components/container/SectionContainer.js'
import Paragraph from '../components/paragraph/Paragraph.js'
import { loadFirebase } from '../lib/db.js'
import { useState, useEffect } from 'react'
import { render } from 'react-dom'
import useWindowSize from '../hooks/useWindowSize.js'

export default function Mitgliederbereich() {

    const [input, setInput] = useState('singvogel');
    const [displayTable, setDisplayTable] = useState(false);
    const [renderTable, setRenderTable] = useState([]);

    let tableData = []

    const fetchData = async () => {
        const db = loadFirebase();
        let result = await new Promise((resolve, reject) => {
            db.firestore()
            .collection('contacts/' + input + '/table')
            .get()
            .then(snapshot => { 
                let data = []
                snapshot.forEach(doc => {
                    data.push(doc.data())
                })
                resolve(data)
            })
            .catch(error => {
                reject([])
            })
        })
        return result
    };

    const handleClick = async (event) => {
        event.preventDefault();
        if(input.length > 2 ) {
            tableData = await fetchData();
            if(await tableData[0] != undefined) {
                setRenderTable(tableData);
                console.log(tableData);
                setDisplayTable(true);
            }
        }
    };

  return (
    <div>
    <PageContainer withFooter={true} menuTypeLanding={false} menuVisibility={true}>
      <ContentContainer>
        <SectionContainer>
            <Title title="Mitgliederbereich" caps={false} />
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <button onClick={handleClick}>Login</button>
    <div className={styles.table}>
        <div className={styles.heading_row}>
            <p className={styles.row_element} style={{width: "150px"}}>Nachname</p>
            <p className={styles.row_element} style={{width: "150px"}}>Vorname</p>
            <p className={styles.row_element} style={{width: "250px"}}>Straße</p>
            <p className={styles.row_element} style={{width: "100px"}}>PLZ</p>
            <p className={styles.row_element} style={{width: "150px"}}>Ort</p>
            <p className={styles.row_element} style={{width: "150px"}}>Telefon</p>
            <p className={styles.row_element} style={{width: "250px"}}>E-Mail</p>
        </div>
        {/*Geht durch die einzelnen Kontakte*/}
        {displayTable ? renderTable.map((tableElement, index) =>
        <div className={styles.row_wrapper} key={`Key${index}`}>
            <Row data={tableElement} />
        </div>
        )
        : 
        <p>Tabelle wird nicht gezeigt.</p>}
    </div>
        </SectionContainer>
      </ContentContainer>
    </PageContainer>
    </div>
  )
}

function Row({ data }) {

    // get width and height
    const size = useWindowSize();

    const [toggleState, toggleElement] = useState(false);
    const [sizeState, setSizeState] = useState(0);

    useEffect(() => {
        if(size.width > 0) {
            setSizeState(0);
        }
        if(size.width > 688) {
            setSizeState(1);
        }
        if(size.width > 992) {
            setSizeState(2);
        }
        if(size.width > 1152) {
            setSizeState(3);
        }
        if(size.width > 1312) {
            setSizeState(4);
        }
        if(size.width > 1472) {
            setSizeState(5);
        }
        if(size.width > 1728) {
            setSizeState(6);
        }
      });

    return (
        <div>
            <div className={styles.row_parent}>
                <div className={styles.row_element} style={{width: "150px"}}>
                    <p className={styles.attribute_name} style={{display: toggleState && sizeState < 1 ? "block" : "none"}}>Nachname</p>
                    <p className={styles.attribute_value} style={{fontWeight: toggleState && sizeState < 1 ? "bold" : "normal"}}>{data.nachname != undefined ? data.nachname : "--"}</p>
                </div>
                <div className={styles.row_element} style={{width: "150px", display: toggleState || sizeState > 0 ? "block" : "none"}}>
                    <p className={styles.attribute_name} style={{display: toggleState && sizeState < 1 ? "block" : "none"}}>Vorname</p>
                    <p className={styles.attribute_value}>{data.vorname != undefined ? data.vorname : "--"}</p>
                </div>
                <div className={styles.row_element} style={{width: "250px", display: toggleState || sizeState > 1 ? "block" : "none"}}>
                    <p className={styles.attribute_name} style={{display: toggleState && sizeState < 2 ? "block" : "none"}}>Straße</p>
                    <p className={styles.attribute_value}>{data.straße != undefined ? data.straße : "--"}</p>
                </div>
                <div className={styles.row_element} style={{width: "100px", display: toggleState || sizeState > 2 ? "block" : "none"}}>
                    <p className={styles.attribute_name} style={{display: toggleState && sizeState < 3 ? "block" : "none"}}>PLZ</p>
                    <p className={styles.attribute_value}>{data.plz != undefined ? data.plz : "--"}</p>
                </div>
                <div className={styles.row_element} style={{width: "150px", display: toggleState || sizeState > 3 ? "block" : "none"}}>
                    <p className={styles.attribute_name} style={{display: toggleState && sizeState < 4 ? "block" : "none"}}>Ort</p>
                    <p className={styles.attribute_value}>{data.ort != undefined ? data.ort : "--"}</p>
                </div>
                <div className={styles.row_element} style={{width: "150px", display: toggleState || sizeState > 4 ? "block" : "none"}}>
                    <p className={styles.attribute_name} style={{display: toggleState && sizeState < 5 ? "block" : "none"}}>Telefon</p>
                    <p className={styles.attribute_value}>{data.telefon != undefined ? data.telefon : "--"}</p>
                </div>
                <div className={styles.row_element} style={{width: "250px", display: toggleState || sizeState > 5 ? "block" : "none"}}>
                    <p className={styles.attribute_name} style={{display: toggleState && sizeState < 6 ? "block" : "none"}}>E-Mail</p>
                    <p className={styles.attribute_value}>{data.email != undefined ? data.email : "--"}</p>
                </div>
        </div>
        <div style={{display: sizeState < 6 ? "inline-flex" : "none"}} onClick={() => toggleElement(!toggleState)} className={styles.button}><p>{toggleState ? "Weniger" : "Mehr"}</p></div>
    </div>
    );
  }