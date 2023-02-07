import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/slider/Slider';


const Home=() => {

return(


<>



{/* Hero component send after to  single component */}
<Navbar/>
<section class="hero is-large is-info">
  <div class="hero-body">
    <p class="title">
      Large hero
    </p>
    <p class="subtitle">
      Large subtitle
    </p>
  </div>
</section>
<section className='section is-large'>



<div className="columns">
<div className="column">
<h1 class="title">Medium section</h1>
  <h2 class="subtitle">
    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
  </h2>
<div className="colum">
<h1 class="title">Medium section</h1>
  <h2 class="subtitle">
    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
  </h2>

</div>


</div>

<div className="column">
<h1 class="title">Medium section</h1>
  <h2 class="subtitle">
    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
  </h2>
</div>




</div>





</section>

<div className="container is-fluid">
  <div className="notification is-primary">
    This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any
    viewport size.
  </div>
</div>

<section className="section is-medium">
  <h1 className="title">Medium section</h1>
  <h2 className="subtitle">
    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
  </h2>
</section>


<Footer/>


</>

)




}


export default Home;