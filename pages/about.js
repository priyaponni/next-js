function About({name, bpi}) {
    const bpi1 = Object.keys(bpi).map(x => {
            return <div key={x}> {bpi[x].rate} {bpi[x].code} </div>
        });
    
    return <div>
        Name:   {name}
        <br/>
        {bpi1}
    </div>
  }

  export async function getStaticProps(context) {

   // Call an external API endpoint to get posts
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  const result = await res.json()
  console.log('**** getStaticProps');
  console.log(result);

    return {
      props: {
          name: result.chartName,
          bpi: result.bpi
      }, // will be passed to the page component as props
    }
  }

  
  
  
  export default About