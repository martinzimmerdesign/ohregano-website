import Head from 'next/head'
import Title from '../components/title/Title.js'
import PageContainer from '../components/container/PageContainer.js'
import ContentContainer from '../components/container/ContentContainer.js'
import SectionContainer from '../components/container/SectionContainer.js'
import Paragraph from '../components/paragraph/Paragraph.js'
import { loadFirebase } from '../lib/db.js'
import { useState, useEffect } from 'react'
import { render } from 'react-dom'

export default function Mitgliederbereich() {

    const [input, setInput] = useState('');
    const [displayTable, setDisplayTable] = useState(false);
    const [renderTable, setRenderTable] = useState([]);

    let tableData = []
    let renderData = ""
    let test = "tesfefst"

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
    <div>{displayTable ? renderTable.map((tableElement, index) =>
    <div key={`Key${index}`}>
          <li>{tableElement.name}, {tableElement.email}</li>
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