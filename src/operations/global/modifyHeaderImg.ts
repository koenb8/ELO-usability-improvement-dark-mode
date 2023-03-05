import { Actions } from "~src/controller/actions";
import { GlobalRepository } from "~src/repository/globalRepository";

export default () => {
  GlobalRepository.getInstance()
    .getHeaderImg()
    .then((headerImg) => {
      const svg = document.createElement("svg");
      headerImg.parentElement?.appendChild(svg);
      headerImg.remove();
      
      svg.outerHTML =`
        <svg height="45" version="1.1" viewBox="0 0 159.28 77.788" xmlns="http://www.w3.org/2000/svg class="small-header-img" alt="My Home">
        <g transform="matrix(.72659 0 0 .72659 68.393 12.01)" stroke-width=".26458">
          <path id="logo-w-icon" d="m66.902 58.342 11.496-6.9075 3.2729-23.291 9.2332 30.198 15.92-9.5655 18.724-65.306a130.24 130.24 0 0 0-20.058 6.2497l-8.7236 41.043-5.9981-34.017a131.49 131.49 0 0 0-18.137 12.163l-3.9127 27.818-6.9556-18.119a132.09 132.09 0 0 0-12.516 14.436c-0.0066 0.01879-0.01376 0.03651-0.02037 0.05477l17.675 25.242" fill="#0000"/>
          <path id="logo-text" d="m-88.308 64.316 1.1996 16.793 7.5499-16.793h5.3626l2.8226 16.758 6.1738-16.758h5.9978l-10.337 25.79h-5.5391l-3.0692-16.934-7.8676 16.934h-5.2567l-2.8572-25.79h5.8208m31.431 2.7162c0-1.8695 1.4113-3.3512 3.4219-3.3512 1.6584 0 2.9284 1.1642 2.9284 2.822 0 1.9055-1.4465 3.3517-3.4224 3.3517-1.6579 0-2.9279-1.1287-2.9279-2.8226zm4.7628 5.6449-2.4344 17.429h-4.8686l2.4342-17.429h4.8689m20.109 6.1389-1.5875 11.29h-5.0453l1.411-10.126c0.3175-2.2225-0.63526-3.3163-2.2582-3.3163-2.0111 0-3.1753 1.3758-3.457 3.3869l-1.4113 10.055h-5.0102l2.4347-17.429h4.4805l-0.03545 1.8344c1.1292-1.5518 3.1401-2.4342 5.2919-2.4342 3.9518 0 5.7507 2.7167 5.1866 6.7389m15.769 1.6579c0-2.6813-1.2703-4.163-3.1046-4.163-2.5757 0-4.2693 2.8223-4.2693 5.8568 0 2.6805 1.306 4.1627 3.1401 4.1627 2.5403 0 4.2339-2.7167 4.2339-5.8566zm7.3382-16.44-3.6692 26.072h-4.4807l0.03545-1.5171c-1.0938 1.2348-2.7517 1.9405-4.7982 1.9405-3.9161 0-6.9149-2.6816-6.9149-8.0084 0-5.8923 3.6341-10.408 8.785-10.408 2.0108 0 3.6335 0.74057 4.6567 1.905l1.3758-9.9843h5.0102m6.7022 15.276h6.632c0.035454-1.8701-1.0583-3.1046-3.0694-3.1046-1.905 0-3.2811 1.1642-3.5626 3.1046zm-0.49424 3.6341c-0.070644 1.9751 1.27 3.4573 3.5983 3.4573 1.8695 0 3.3168-0.98795 3.8103-2.4347l4.1275 1.4116c-1.2348 3.2105-4.3744 5.1509-8.2198 5.1509-4.7628 0-8.1497-2.9991-8.1497-8.5027 0-5.6094 3.5277-9.9491 9.1371-9.9491 5.5748 0 8.2907 4.3042 7.5851 9.2789-0.070115 0.49371-0.14076 0.81174-0.38761 1.5878h-11.501m24.871-4.975c0.03493-1.1994-0.77655-1.9751-2.0817-1.9751-1.2348 0-2.0463 0.70538-2.0463 1.6224 0 0.88186 0.74083 1.1644 1.6584 1.411l2.1516 0.52943c2.6109 0.67045 4.0931 2.5048 4.0931 4.939 0 3.7751-3.3875 6.0333-7.5856 6.0333-3.8804 0-6.5267-1.9405-6.5267-5.2919l4.2691-0.67072c-0.07064 1.1999 0.84667 2.0111 2.4694 2.0111 1.3758 0 2.2931-0.635 2.2931-1.6227 0-0.67019-0.42333-1.129-1.3052-1.3758l-2.4342-0.70564c-2.9633-0.88186-4.163-2.5405-4.163-4.7628 0-3.5282 2.8223-6.0333 7.1967-6.0333 3.7751 0 5.9626 1.9407 6.2799 4.9392l-4.2685 0.9525m24.271 1.0234-1.5523 11.113h-5.0096l1.411-10.02c0.3175-2.2931-0.67019-3.4221-2.2931-3.4221-2.0108 0-3.1395 1.411-3.4219 3.4925l-1.4116 9.9494h-5.0451l3.6692-26.072h5.0099l-1.3761 9.9139c1.2351-1.2348 2.9284-1.8703 4.763-1.8703 3.9513 0 5.8208 2.7871 5.2565 6.9152m8.7831 0.3175h6.6326c0.03519-1.8701-1.0583-3.1046-3.0689-3.1046-1.9053 0-3.2811 1.1642-3.5637 3.1046zm-0.49398 3.6341c-0.07038 1.9751 1.2705 3.4573 3.5989 3.4573 1.8701 0 3.316-0.98795 3.8103-2.4347l4.1278 1.4116c-1.2345 3.2105-4.3752 5.1509-8.2203 5.1509-4.7628 0-8.15-2.9991-8.15-8.5027 0-5.6094 3.5282-9.9491 9.1376-9.9491 5.5742 0 8.291 4.3042 7.5856 9.2789-0.07091 0.49371-0.14155 0.81174-0.38841 1.5878h-11.501m17.639-15.912c0-1.8695 1.411-3.3512 3.4219-3.3512 1.6581 0 2.9284 1.1642 2.9284 2.822 0 1.9055-1.4467 3.3517-3.4221 3.3517-1.6584 0-2.9281-1.1287-2.9281-2.8226zm4.7625 5.6449-2.4344 17.429h-4.8691l2.4347-17.429h4.8686m29.564 6.2095-1.552 11.219h-5.0099l1.4462-10.549c0.28258-2.1519-0.635-2.9988-2.0463-2.9988-1.7992 0-2.7871 1.3761-3.0337 3.0342l-1.4467 10.513h-5.0805l1.4822-10.549c0.28204-2.1167-0.77655-2.9988-2.1521-2.9988-1.7994 0-2.7167 1.4467-2.9284 3.0342l-1.4467 10.513h-5.08l2.4696-17.464h4.4453l0.03519 1.6931c0.74083-1.2348 2.3289-2.258 4.4807-2.258 2.4344 0 4.1984 1.1647 4.7276 3.2107 0.98769-2.0817 3.175-3.2107 5.574-3.2107 3.7044 0 5.6803 2.6464 5.1155 6.8093m-189.69-33.122-1.0086 7.2231h-3.0506l0.91731-6.5585c0.22939-1.5822-0.45826-2.3389-1.5822-2.3389-1.4213 0-2.2013 0.98584-2.4077 2.4305l-0.91731 6.4672h-3.0956l2.385-16.947h3.0729l-0.91731 6.5357c0.80275-0.87154 1.9494-1.307 3.1874-1.307 2.5683 0 3.7835 1.8113 3.4168 4.4947m7.3147 4.7921c1.6968 0 2.7974-1.6285 2.7974-3.6004 0-1.8574-0.89429-2.9117-2.2929-2.9117-1.6973 0-2.821 1.628-2.821 3.6229 0 1.8341 0.91731 2.8892 2.3164 2.8892zm0.55033-9.2644c3.2332 0 5.3658 2.2474 5.3658 5.5951 0 3.5084-2.3389 6.3979-5.9849 6.3979-3.2337 0-5.366-2.2013-5.366-5.5721 0-3.5317 2.3619-6.4209 5.9849-6.4209m15.295 5.2739c0-1.7198-0.80274-2.7056-2.1331-2.7056-1.6738 0-2.8662 1.628-2.8662 3.669 0 1.7431 0.8255 2.6831 2.1325 2.6831 1.674 0 2.8668-1.5367 2.8668-3.6462zm3.7605-4.907-1.6055 11.443c-0.48154 3.3483-2.7744 5.2514-6.0537 5.2514-3.0041 0-5.0676-1.5822-5.3888-3.8754l2.5225-1.0321c0.29792 1.4676 1.3986 2.2246 2.8662 2.2246 1.6282 0 2.7519-0.94006 2.9811-2.6374l0.22913-1.5592c-0.6649 0.80275-1.7198 1.307-3.1184 1.307-2.7519 0-4.3569-1.9722-4.3569-4.9535 0-3.7375 2.1783-6.5352 5.4345-6.5352 1.5595 0 2.8207 0.66516 3.3941 1.651l0.32094-1.284h2.7747m4.677 4.4027h4.6093c0.09181-1.3528-0.68818-2.2471-2.1095-2.2471-1.3301 0-2.2931 0.87127-2.4998 2.2471zm7.5449 1.1925c-0.0463 0.32094-0.11456 0.5506-0.25215 1.0321h-7.5909c-0.09128 1.4446 0.82603 2.4535 2.431 2.4535 1.307 0 2.2931-0.68792 2.6374-1.6968l2.5225 0.89429c-0.80275 2.1095-2.8437 3.325-5.3202 3.325-3.0956 0-5.2287-1.9492-5.2287-5.4808 0-3.646 2.2701-6.5122 5.9166-6.5122 3.5541 0 5.3197 2.7517 4.8845 5.9849m8.0478-2.2016c0.04604-0.8255-0.52732-1.3753-1.4441-1.3753-0.8718 0-1.4452 0.50403-1.4452 1.1692 0 0.61939 0.48154 0.82576 1.1237 0.98584l1.4449 0.36724c1.697 0.4355 2.6141 1.6052 2.6141 3.1644 0 2.4537-2.1558 3.8984-4.8615 3.8984-2.5225 0-4.2193-1.2613-4.1963-3.4401l2.6143-0.41222c-0.0463 0.84826 0.57335 1.4216 1.6965 1.4216 0.9861 0 1.6513-0.45852 1.6513-1.1697 0-0.48128-0.32094-0.80222-0.91758-0.96282l-1.628-0.45852c-1.8804-0.57335-2.6599-1.6515-2.6599-3.0731 0-2.2931 1.8113-3.8981 4.609-3.8981 2.4305 0 3.8526 1.2615 4.036 3.2102l-2.6374 0.57335m4.0815 2.6374c0-3.5547 2.3617-6.4209 6.0539-6.4209 2.6366 0 4.586 1.4904 4.9988 3.8523l-2.7056 0.87127c-0.18362-1.1692-1.1007-1.9487-2.3164-1.9487-1.7198 0-2.9123 1.4674-2.9123 3.5084 0 1.8344 0.96308 2.958 2.454 2.958 1.2152 0 2.2013-0.73395 2.499-1.8116l2.6374 0.96282c-0.7112 2.3162-2.8432 3.6004-5.343 3.6004-3.2329 0-5.3658-2.2013-5.3658-5.5721m23.435-1.9262-1.0089 7.2231h-3.0499l0.91731-6.5585c0.22939-1.5822-0.45852-2.3389-1.5822-2.3389-1.4221 0-2.2016 0.98584-2.408 2.4305l-0.91705 6.4669h-3.0959l2.3847-16.947h3.0731l-0.91731 6.5357c0.80275-0.87154 1.9492-1.307 3.1874-1.307 2.5683 0 3.7835 1.8113 3.4166 4.4947m7.3147 4.7924c1.6968 0 2.7974-1.6285 2.7974-3.6004 0-1.8574-0.89429-2.9117-2.2931-2.9117-1.6968 0-2.8205 1.628-2.8205 3.6229 0 1.8341 0.91731 2.8892 2.3162 2.8892zm0.55033-9.2644c3.2332 0 5.366 2.2474 5.366 5.5951 0 3.5084-2.3392 6.3979-5.9851 6.3979-3.2332 0-5.3663-2.2013-5.3663-5.5721 0-3.5317 2.3622-6.4209 5.9854-6.4209m12.497 9.2644c1.697 0 2.7977-1.6285 2.7977-3.6004 0-1.8574-0.89429-2.9117-2.2929-2.9117-1.6973 0-2.8205 1.628-2.8205 3.6229 0 1.8341 0.91678 2.8892 2.3156 2.8892zm0.5506-9.2644c3.2332 0 5.366 2.2474 5.366 5.5951 0 3.5084-2.3392 6.3979-5.9851 6.3979-3.2332 0-5.366-2.2013-5.366-5.5721 0-3.5317 2.3617-6.4209 5.9851-6.4209m9.0797-5.2512h3.0043l-2.3847 16.946h-3.0043l2.3844-16.947" fill="#0000"/>
        </g>
        </svg>
      `;
    });
};
