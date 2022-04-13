import Head from 'next/head'
import Header from '../components/Header'
import Section from '../components/Section'

const styles = {
  wrapper:""
  
}

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Clone | Tesla Electric Cars</title>
        <meta name="description" content="Tesla Clone" />
        <meta name="keywords" content="NextJS, Tesla, TailwindCSS"/>
        <meta name="author" content="Gedroke, Ibrahim EL MHADRI"/>
        <meta name="viewport" content ="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <Header/>
      <Section 
        title="Model-3"
        desc="Order Online for Touchless Delivery"
        backgroundImg="/images/model-3.jpg"
        buttonLeft="Custom order"
        buttonRight="Existing Inventory"
        downArrowShow={true}
      />
      <Section 
        title="Model-3"
        desc="Order Online for Touchless Delivery"
        backgroundImg="/images/model-3.jpg"
        buttonLeft="Custom order"
        buttonRight="Existing Inventory"
        downArrowShow={false}

      />
      <Section 
        title="Model-3"
        desc="Order Online for Touchless Delivery"
        backgroundImg="/images/model-3.jpg"
        buttonLeft="Custom order"
        buttonRight="Existing Inventory"
        downArrowShow={false}
      />
      <Section 
        title="Model-3"
        desc="Order Online for Touchless Delivery"
        backgroundImg="/images/model-3.jpg"
        buttonLeft="Custom order"
        buttonRight="Existing Inventory"
        downArrowShow={false}
      />
      <Section 
        title="Model-3"
        desc="Order Online for Touchless Delivery"
        backgroundImg="/images/model-3.jpg"
        buttonLeft="Custom order"
        buttonRight="Existing Inventory"
        downArrowShow={false}
      />
      <Section 
        title="Model-3"
        desc="Order Online for Touchless Delivery"
        backgroundImg="/images/model-3.jpg"
        buttonLeft="Custom order"
        buttonRight="Existing Inventory"
        downArrowShow={false}
      />

    </div>
  )
}
