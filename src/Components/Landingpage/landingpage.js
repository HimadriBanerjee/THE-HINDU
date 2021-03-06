import React from 'react';

import { About, Editors } from './Dependencies';
// function LandingPage() {
//   return (
//     <React.Fragment>
//       <About />
//       <Editors />
//     </React.Fragment>
//   );
// }

// export default LandingPage;
let aboutContent = {
  string_1: "Welcome to our website built on React. This is a Hotel Booking Website consisting of 25 hotels around. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.",
  string_2: "Germany",
  string_3: "Hello Germany atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
  video_1: "https://www.youtube.com/watch?v=jDDaplaOz7Q",
  string_4: "Hello World",
  string_5: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque"
};

let editorsContent = {

  address: "13/2 Action Area III, Kolkata 700028, India",
  email_1: "hotelfix@hotelfix.com",
  email_2: "worldwidehotelfix@hotelfix.com",
  number_1: "+9162913688"

};

function LandingPage() {
  return (
    <React.Fragment>
      <Editors content={editorsContent} />
      <About content={aboutContent} />

     
     
    </React.Fragment>
  );
}

export default  LandingPage;