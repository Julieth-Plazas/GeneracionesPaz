import React, { useState } from 'react';
import Game1 from '../Games/Figuras_Geometricas1'
import Game2 from '../Games/MemoriaAnimales'
import Game3 from '../Games/MemoriaVocal'
import Game6 from '../Games/MemoriaNumeros'
import Game4 from '../Games/GamesSumRes1'
import Game5 from '../Games/GameEnglish1'


import img1 from '../../assets/onje.PNG'

import img2 from '../../assets/ddd.PNG'

import img3 from '../../assets/figu.PNG'
import img4 from '../../assets/sss.PNG'
import img5 from '../../assets/3dgt.PNG'
import img6 from '../../assets/anim.PNG'
import img7 from '../../assets/voc.PNG'
import img8 from '../../assets/ddee.PNG'
const Games = () => {
  const [activeTab, setActiveTab] = useState('tab2');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [showIframe1, setShowIframe1] = useState(false);
  const [showIframe2, setShowIframe2] = useState(false);
  const [showIframe3, setShowIframe3] = useState(false);

  const toggleIframe1 = () => {
    setShowIframe1(!showIframe1);
    setShowIframe2(false); // Oculta el componente 2 cuando se muestra el componente 1
    setShowIframe3(false); // Oculta el componente 3 cuando se muestra el componente 1
  };

  const toggleIframe2 = () => {
    setShowIframe2(!showIframe2);
    setShowIframe1(false); // Oculta el componente 1 cuando se muestra el componente 2
    setShowIframe3(false); // Oculta el componente 3 cuando se muestra el componente 2
  };

  const toggleIframe3 = () => {
    setShowIframe3(!showIframe3);
    setShowIframe1(false); // Oculta el componente 1 cuando se muestra el componente 3
    setShowIframe2(false); // Oculta el componente 2 cuando se muestra el componente 3
  };
  return (

    
    <div className=' bg-white'>
      <div className=" bg-white pl-18  tabs-boxed  tab-active text-base justify-center tabs">
        <a
          className={`tab tab-lifted ${activeTab === 'tab1' ? 'tab-active' : ''}`}
          onClick={() => handleTabClick('tab1')}
        >
          IDIOMAS
        </a>
        <a
          className={`tab tab-lifted ${activeTab === 'tab2' ? 'tab-active' : ''}`}
          onClick={() => handleTabClick('tab2')}
        >
          MEMORIA
        </a>
        <a
          className={`tab tab-lifted ${activeTab === 'tab3' ? 'tab-active' : ''}`}
          onClick={() => handleTabClick('tab3')}
        >
          MATEMATICAS
        </a>
        <a
          className={`tab tab-lifted ${activeTab === 'tab4' ? 'tab-active' : ''}`}
          onClick={() => handleTabClick('tab4')}
        >
          LITERATURA/LETRAS
        </a>
      </div>
      <div className="tab-content ">
        {activeTab === 'tab1' && (
          <div > 
         
          <div style={{  display: 'flex', gap: '10px' }}>

            {/*    Contenido para la pestaña 1 */}
            <div class="card mg-8 p-2 w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
              <img src={img1} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Encuentra el Objeto!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions">
              <button className="btn btn-primary" onClick={toggleIframe1}>
                {showIframe1 ? 'Hide' : 'Show'} GAME
              </button>

              
            
              </div>
            </div>
            
          </div>
          <div class="card mg-8 p-2 w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
              <img src={img5} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Escuela con 4 juegos</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions">
              <button className="btn btn-primary" onClick={toggleIframe2}>
                {showIframe2 ? 'Hide' : 'Show'} GAME 
              </button>

              
            
              </div>
            </div>
            
          </div>
          {showIframe2 && (
             <iframe
             src="https://v6p9d9t4.ssl.hwcdn.net/html/5137922/index.html"
             title="sd"
             width="100%"
             height="auto"
           ></iframe>
          )}
          {showIframe1 && (
               <Game5></Game5>

               
              )}


         </div>
          </div>
          
        )}
        {activeTab === 'tab2' && (
           <div > 
         
           <div style={{  display: 'flex', gap: '10px' }}>
 
             {/*    Contenido para la pestaña 2 */}
             <div class="card mg-8 p-2 w-96 bg-base-100 shadow-xl">
             <figure class="px-10 pt-10">
               <img src={img6} alt="Shoes" class="rounded-xl" />
             </figure>
             <div class="card-body items-center text-center">
               <h2 class="card-title">Memoriza lso animales!</h2>
               <p>If a dog chews shoes whose shoes does he choose?</p>
               <div class="card-actions">
               <button className="btn btn-primary" onClick={toggleIframe1}>
                 {showIframe1 ? 'Hide' : 'Show'} GAME
               </button>
 
               
             
               </div>
             </div>
             
           </div>
           <div class="card mg-8 p-2 w-96 bg-base-100 shadow-xl">
             <figure class="px-10 pt-10">
               <img src={img7} alt="Shoes" class="rounded-xl" />
             </figure>
             <div class="card-body items-center text-center">
               <h2 class="card-title">Memoriza las vocales!</h2>
               <p>If a dog chews shoes whose shoes does he choose?</p>
               <div class="card-actions">
               <button className="btn btn-primary" onClick={toggleIframe2}>
                 {showIframe2 ? 'Hide' : 'Show'} GAME 
               </button>
 
               
             
               </div>
             </div>
             
           </div>

           <div class="card mg-8 p-2 w-96 bg-base-100 shadow-xl">
             <figure class="px-10 pt-10">
               <img src={img8} alt="Shoes" class="rounded-xl" />
             </figure>
             <div class="card-body items-center text-center">
               <h2 class="card-title">Memoriza los numeros!</h2>
               <p>If a dog chews shoes whose shoes does he choose?</p>
               <div class="card-actions">
               <button className="btn btn-primary" onClick={toggleIframe3}>
                 {showIframe3 ? 'Hide' : 'Show'} GAME 
               </button>
 
               
             
               </div>
             </div>
             
           </div>
           </div>
           {showIframe2 && (
             <Game3></Game3>
           )}
           {showIframe1 && (
                <Game2></Game2>
 
                
               )}

              {showIframe3 && (
                <Game6></Game6>
 
                
               )}
 
 
       
           </div>
        )}
        {activeTab === 'tab3' && (
          <div>
            {/* Contenido para la pestaña 3 */}
            <div > 
         
         <div style={{  display: 'flex', gap: '10px' }}>

        
           <div class="card mg-8 p-2 w-96 bg-base-100 shadow-xl">
           <figure class="px-10 pt-10">
             <img src={img4} alt="Shoes" class="rounded-xl" />
           </figure>
           <div class="card-body items-center text-center">
             <h2 class="card-title">Sumas y Restas!</h2>
             <p>If a dog chews shoes whose shoes does he choose?</p>
             <div class="card-actions">
             <button className="btn btn-primary" onClick={toggleIframe1}>
               {showIframe1 ? 'Hide' : 'Show'} GAME
             </button>

             
           
             </div>
           </div>
           
         </div>
         <div class="card mg-8 p-2 w-96 bg-base-100 shadow-xl">
           <figure class="px-10 pt-10">
             <img src={img3} alt="Shoes" class="rounded-xl" />
           </figure>
           <div class="card-body items-center text-center">
             <h2 class="card-title">Figuras Geometricas!</h2>
             <p>If a dog chews shoes whose shoes does he choose?</p>
             <div class="card-actions">
             <button className="btn btn-primary" onClick={toggleIframe2}>
               {showIframe2 ? 'Hide' : 'Show'} GAME 
             </button>

             
           
             </div>
           </div>
           
         </div>
        



         <div class="card mg-8 p-2 w-96 bg-base-100 shadow-xl">
           <figure class="px-10 pt-10">
             <img src={img2} alt="Shoes" class="rounded-xl" />
           </figure>
           <div class="card-body items-center text-center">
             <h2 class="card-title">Dead Space con Maematicas!</h2>
             <p>If a dog chews shoes whose shoes does he choose?</p>
             <div class="card-actions">
             <button className="btn btn-primary" onClick={toggleIframe3}>
               {showIframe3 ? 'Hide' : 'Show'} GAME 
             </button>

             
           
             </div>
           </div>
           
         </div>
        
           
        
         </div>
         {showIframe2 && (
           <Game1></Game1>
         )}
         {showIframe1 && (
              <Game4></Game4>

              
             )}


          {showIframe3 && (
                 <iframe
                 src="https://v6p9d9t4.ssl.hwcdn.net/html/3876726/dist/index.html"
                 title="sd"
                 width="100%"
                 height="900"
               ></iframe>

              
             )}



     
         </div>
          </div>
        )}
         {activeTab === 'tab4' && (
          <div>
            {/* Contenido para la pestaña 3 */}
            <div>
           
            <div class="card mg-8 p-2 w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAABOFBMVEX///97fH7GtWd5p2d6pmn///x3qGd4eXv5+flsbW92d3nu7/Dn5+dxcXB5pWh7p2jU1NV7fIC/wMJnaWjGtWTOzs7HtGmqqqq1tbWkpKR6pWx9foC/sHJynWV6pmT///Xr68///+jK2cJvn157nmiKi42TlJjT0Z/a5djz//G1yq+pwqJznWu9r2Wyt7Td3uHMw5FvbXSYs492lmnj37/n6eG4qWfW5NHv9eR2oGx3gYDE1bxvpFxiYmKjpaJ6mG3V5s3p6MGQl5O0ybaYsZOFqnujv5rc2N5wimbD2LWxyqWgvJisu6WXtInn3cRpk2DF3r/At37IxJ3Ty6+WuoX5+Njr5bOzqXPFwIeNjJW8s17i2J7IvXuxvKtpkFfEv5+oo3Xh1bKImYDo+OLR18ufrJlzgGOEm3raNUnoAAAVKklEQVR4nO2dC0PbRrbHx0ga2bIZG2OMLSEJ/IptnDWx49peTCEB0wZwQ9Ju29vXbhd6+/2/wT0zo8foQVqy995Uwn8SMOOxGv165ujMnHkgtNZaa6211lprrbXWWmuttdZaa6211lprfbQUQZ/63/KXlRKjT/1v+n9SNl4PlSu9mWKLmLJKlv55nD71TX+sCiebUeXqaHc7pnz7C/Rly3Q08GWindjqNdTJxZSf5D/1XX+kCpuZqNRdVNOMaLk2RAMshSVbc1TSYi6jlVF9aytanns6sIohSfoaVuzdPwBr8DAs9WnAUj8ES4Iv+C79oWWlEJaR4WhUNQpLVT1sAKtVlKkWuiURScKSLEs69mHxumoEFruIe52Ew1LbbQNupd1uqx4s7rNUo1Nvaz6sAYMl6SNdkvWlLksBWCq9gOpcRYBltJmMVMDKQeiTM9j3ICy1Q29sKMCyZJmQ5htlhcmVfaXjAKwcQnUtV+BX8WGpbf4f29FSAQv++XW1g8KwVANla/USGm6GYB2ja2z2UX8eggXRrBqFlTHKtTyq1epqGmBtQ1Rd2iyjLMr93RCehnC75ZwKN2cYLiyJwiIUlgWwsI6Fp6GRgyvsnHBYW6LPouamuc4v8bDyQ3SSLxTCsEqoo2a0HVTPfAjW3IeV30HtGFgZgKW6kVvCYW1ms7sICOX/Q1gvUH4TFYaph7UNLWhThGXwZriT0+Dm+GPfgSUT8xgdNsFxHUYtCzqE2XTDymWzJ0PoVAMsI/g0BB+0O3T9N42zLApLH9nZ/nlP0SHWCsLK5gBLxMGnC1Y+v72breUKWR8Wuy+1XYAHnPPId5+GMsGtfk+xZzdzFmcJsPL5nNrOZmNgDbOZlMDKGBCTtmnwyO3J7xuqWrvTdrtEQlA6X66+0SVdCsCCUAOuoxoOlUB3x2h7PfOkw6LdEb9bE+xIB7o7zGfJuoxBsk4sSS7KxXVHOu7u/VEHwvvT1GWBmQGsyIjO1lOC9eHxLMKaYxHMSv4grCcynvUHg3+sOcqOA4PwP1KZw8qkC5YalQawYsq13BC9lSAkhYCB+MLMskJQaH3oP9VpeegyyYWVr38OqocEsWi4iKmALg5DuoavGzSMrb6DyrHlyYT16IRf9qmkCGOkoHyj0ZhOGyF10XAnTnn01VcvY4QKsdULqBRbntTEYfdtM0Y3aPdFXCJwaH+28TxGCvQgNS2QeqTfwGelKm84MamzdjM17vPtEP0tLs7aHNp71Y2QKtXKnvIUglKFwhLSWpwVWcOKk4K6ZjEC6yHLMrQnDYs2QwYJYkxMZOnPw6o8BEuIZRmsGIhJhaVwWDrGZGGaWOLWJV06fUND1ehPTQvDqv5QBcXBAkfPATndHV4K1/HeSDosYLXs3zZuJIxlEVbGYBmZ2q4WhEUBPXu2V4nA0trlUrmjhWFpuzWqTrKzOy4ssrxTZja6nWOnGXJYahsNtYzh5q0FWNVn9sFRBJbaQdkC4o3PgfV3hqfA/mu1ZOcNFRo6QPAwnyr909EdGklSGFZOzYiwuKOqPn+F7Fc/CLB4rmwHIqs6H90SLWuzgDptnvVOPixrgOyxTlY3S6koOniAVdjdrUVgVSvvDvb3D+gvFdGyAE+h9ppDEYdoABbtEybfZzFYSzQZQ2OcY6yHYDGFYVWeP1Pef33waxWeikGfVYLa+dcxsKi0VMCSBmjWImT15hssh2AN251OFNbeP5SXX9n7n1FUos+CplYvoWwuCqsDSodlSYMJuhycnqERobSaIqycajhzHYRmeHQwO9i37Xchy6KJ/u0TMW/owcqkInRg4+jyyla6M/sMnobgtIgIa5M+DXMhy3ppv997995+9bwa9Fk1lC0VAg7ehUVnKZdT8TSE8H05nU7PITgNwRrCDRrDshaE9fzbb/c2qu9ehWFBQDUsFMpqJgRLKw+pdlPxNMRYIpI+JwRLkggr40bwRqgZPgdK8H2vEoJFg32VvxZhbWkvNG0zl3wHjxksWcY6gUehhGne9AN9Qyd0qFQ34FFY+SHc3TEyfm9QyO4EutOJhdU1cUQSftyow8YTGXUAWGBYxeAqgOKjhmg2nhKs8Lx2q/jgSOmHxrPi0oypgzV21+K0HMEr8wbVXmxuap42+S+5of3dXswQ/Hd8DD6sHB2DjynfTiYsRel1p57OmOirCSqUSsNhiYu+4K/z9j7Ty1dc7JdXL79Cebcq/zakf4YQcRWEYl9Jze48KDtuXeETzhpSFdqvQZ2Qyujr749iNEH/1Xn9mn/itSP6ApX478GrtMuoFr3269ftZDZDgJVz5jFowbkOz36oBh543JfvoxfOzIWtLaH6Jio5UyMywneVOnjxsq4S6rMenkXz7IdIiFCpbOyj8AQQXv+JT2aLg7XxECxtDSvWsjbXsB6CVaGEfMuq7qPcH8AyqCKwDJpONFKyhI4urgG5d0xhuZCeP686GdVKNQArl4uBpeaE6wCszzksXpwWWFotD9pRQ7Cq1Z++/fF5ZSMGlpYXEqve1O56vgDX8dMXHJbaocWF3YQP0XiwyhBs550RUQFW5fuDV59VqnGwUD5nhGFpNZQvFAo+LGe9YZ2G+FmUjiV09L5qOYh/tFAzrHxvv3wYVsSyAFY50Aw9WDu53G5KFmdmVArLyKLNkGVtHNkv3ej0z8GiUwbragRWyWiXUMKHlQVYVGUtCutVNd5nPQCLJiZq0WZINcylw2cBrFK53NHUEKwKwKLPw/+4GZba7QJK+MSQQDP0dyfwfFb1yN6HDvRP1T8HS62hHT+b6j8Nqc+CDmfCU2GCgy8LS5sEWAe2fXDwY7VSCcJSH7IsKr4QLwALKtTT4uAz7Xo7EwfrJzY08xOf1CBalrpbj8ZZcJm6PwPED0rb9Y5qGLspCR0yGXE+o+Dgq88rFZr3isBypwMGYTmDM5kQLL4MLyWr70NisOg0yCoN4tl8yGq0b+inKMJ9w7jFmYLSBksBy3Jo8W5PtfrnOtKBYt+y0gfLGy4Ay/p1oxJS1WmGRjTpRWHFbYoUB8tINCzx5p1GRGFVI9rwfVYQmBpjWfQ6Liy3Nv9pGImFNTzJedqEL6btOvr6u72oPpshobqvbbSzHVdM9/wDvXjhXN5RYtfuPCT7AMKriOxH5sJSlyCMl9Lr2bbdC8l+7GXiiB8cJDX9ODzZjuqkjn4ev337tvXWEU3vw49fJiiu+vYJ2om9TA3987vPovrX/qe+649UbOgA3bg+oQtTglNG5GYXvYiprj6QCoMO51E1/FAF7f3j8Uto/xJ6GJYUnV1DYT0uzjqqRkIQCiuh8wAeiuD7TXeTCzZji20gWfwoWDyL5mujsrefSlh0GqAE3/hr6SFYD2ekj+Lmvn2XfFhCnElh8UnMssTmTdIdSbEkNkND7Ho/CEtxYVWeV31YibcsFrqrbvYPYGFnWxC8XLZYU8SizzI0o9NRvaEGDxbvAhhqGFb13Z4HK/HNkK25Qdm6GoIlkcHM7pMILK3MqmshWM7gXz4XhvXjwbeV9MDaQeXdsnuXns8qYn2loN4gDAsel/ndWhYZUVjDWrnsJSxcWJVf7V/TA0vdQZ1NTUiy9rFMN1BemA10r1wzryX4rBxwUnP1kjPYrgYSFprmJSw8WM8UD9ZGNeEOfgtg5aF72/ZSYX1CKB886E3+rUybbMdpH9Ymym5r/jpeEVaepsLCPovDciaZpAFWuVbOZkVYdKNpcqjc/zuvjHVqWw4sw4GF/DyjAKtQLvtJ1gAsd4JJGmB1ciclJ7PnwrJw6wy61MjuzyHWEmHlwQhzu3GwyttC3lCEReeApwIW9Vk75bLrsQHWOSbgtPDvaHJxfWNPxjjgs8DBZ8EQYy1rZ6e046yYFmDZs5cvX35fSQmsLIQC+boWhGVd9Q5NMjjrLXEodIBHIRo6i+V8WOouO/0kEjpU37OhmWfpgMWV8+dncVhEX9IVY/NTPRRnZTS10/aSrIGgNCNkdzzL+und3t7eu3Q8DdkdC90XCkuW6YkLulXkPZ4QLFrf2/ww0N3Z2nLLBVh8tCEdDt4xiwAsQveKtNiekRLddyUCy//gBzvSYsKDp9VSAStoWUQODv6FYYn142BtMcvyJ/A6cVYl+RF8FFbzz8ByvFPseJYLyxvH8qglePCPLRxhf7zlJRAZnC/Y5hiCwG0xWEI957sGsHLsp1cEf7bUUDP0lNhmmO/E7Y1ZRo2L65Au4W8XvY7dSxOV4rfetL9+f3R09P69s07qPdXR+3/OPvVd/y8rPkNoPzIRmHV29xRX3ykfsePnX0R2eNdNpimaxJbPUGxxA03uo4W3D+7gmVRY/rJfUYfoxiSEviKmty0w/NZF48HckVuXzMdj1IDLEF3nn3HfGPRRfTNFy34R3apAwnwjDLZLAX1tHaI+3ehd5lkdy1mTTwDWgPAQ1V+xj7HeQo1BzI4HzT5dJuAGqX6wmtiJIXzHkNCOktIhHXUQQgcf1hgHymh9LLfQlJ97KKbPsLzoo8/TtEEi6j4ClkxhSR+CRZ4MLGcrXJntRePBIiKsqQtLYqf2PTHL4juGSDJ4mIU5x/RW+f5Z/SYHJ2FisgNjwHUxy6IdbBmDMwevZAJQ3ZKLczQd86MOcYt1wHmCY3HuwdL8abmJhwVI5leNxnWL7+vKYLE9S8Harq9WxEniO7BkQlZXS0v6pv+NDAzp6SgcVpGQ/hWJgdWmG2/W3YN3kg5LXt7Zs55y2wrBwmRgK2dmGJbZUC4t/Qpd6QtLhCWZaNZ0YUkeLHftTsKndjuwsHmGjpejGVoxFn4zXJBLJWvPcQhWs6FcY/3K7usLWYRlDQRYvmWpHVRqdwpJX2HhbDa2aCm907m+ulwSutsYYZbF7ng+tX9WbiTCgi4BFrrE5Fzp0zSGrAMsnuK34DqmzB294ODp2h1Ny7jLVBIOCy8hlNfx3CQSEWFhaWl3v7TPAAA9UdT3WQ10jUkfYMmYnbszHRQdWLYpO7NuQrDosZqpgCXpymRclOjWm8UALLOvFM7zygriAxGWdYxuiAOLHSUznXNYJliWTmQ+/hWEpdJT17ZSAEs2J+hmMJ+CzwrAWgzuspNZXjkmiwAsqY+OB60puglbFsAaL+dLKQpLNcreYaRJhcUdvI5HPWUyUboDuHcG67xJ4wU8su/n+mmvB10/4vgsZjXLng3VZyYNYem5O+DgGayBjfKT2bQZaYbZfB5l28leFeYFpWR1dnbWPyUCLBo3XZ2NCDbfnC0xmJMPS5qPbu/ubn9ngYYAC89v6S5cb8KwOoXhcFh2F+klF1bTieCxqet0s8QALFk36XtkQOjp2j4s+kBs6axHFIQl89EZKQiLb4LhDdMnFxZ38Hz+KPVHkgiLjtgUWSqMHpDpwypKloUXbNNquYj90IHNqnROW0ln31D2pev8Ozh4ixT9cuaaoCU6Dp7VwZh/UqewGq2iX5c4MwWb5+lab+hG8JF9SvskOppXbNJRB2fwT3I/B8EDwBowyyw6Fsresxb9FMLiNygOcbpDNMFiNvhHJAcGoSEEtDwndCDUrTFv5tkjh2UIyrCZEMmF1Ywfg+9Hypvm/G0XvY2r/xY14sqhGXbiVtwldQmdMrmne25OQ5pAeRcULp+hKS3rngmf6U67XWXS7fL6/mfgVRcNv/jii1Lpi+DOm6WkZndYPi+6p6ZToiBnx03nfTtrR5PJSvgkP69KNmUn/E1+u7gYjVagkaMLKDhHO1A68sqc8osJ4rXp795nVqMLehn+cuVptLpooJ8vmEYB/fboZYt/EU0Huk7YQLt7FJ0OBRBnmfSn7mgOX6AmOHgaNTARwjvMpEgd/Klb5knH8z66mLMyy7k4K5fHk0991x8n6EjTERfnycYDS57dsdgdw7PNOYNV5rNoBjJLSQiJiSImLRpnUdr0Df6khM/o5BxdYDfm9TJCBI9niZwYojBYMgsTwrBoDAA2BwiIzMe2OCwpJAjVddQYB7ZJJ0Uo1ptgWV6a0U+fLRIMq0hkx3qcGyWEwwrlDYOwih+ExYJTHacLFnJgyR+G9UeW1fJgFSOwZDfPmHxY7ORM6kewbs7n4NShS1dk2R3eGQZGzVZrIXnrDQcSQyuNaeqwqUtEIhbt7vCONMEt04XMOtKH7BTA4uLUXMjEHLAMblJ9ljvXQZbM1azXmy7nLNfswaK94cbdIREsy6Ks9Ku7FTav7g51GesCrGLz7qwZA+ub2ZVlNmZvWB8p8bD0UU+576K7ATcoFxagWCIoxSFY5jE6XOh9dD4HJgIsyUR2U+ctT4BljaCd3qLJgKQC1uAOXZye3trXzMd4sGispOTtlRWC1TxGK0yuUB9bugirOEAzE0rCsFbovm+ftSw+WJhYWF2+8PIUzSA61ZfgtNxZNMyyFuas9xtqABNnAq4Paw4s+mxg1RIsS6GWxQa6gO05uiZ0+BBgZZH9O3EmjiQd1pLNajPHc3ajxIMlrZT7/+7NTInBIi4s6xhd4wdgmXwEUYAlQzO07WzDXKQCVpGmsHRw25dEFi2LDBp2dpaFe5YBVtGBJRPrFt0QYBFvWcSxrIVnWSM0+z2rXPA1nsmFNWGwZHKv3C9Htr2U2PITL3Q47U0at/fKtMk2LPBggbuarpbQrQ7BsgDWxfX1SIrAarQuFPs04bDcVNj8jI7H9E2sF4VmCL2742Zz3EOndOIpg8XDgsGdYmeVRpMuBpa4g2ddpjEd1EEFFj5IVh9d64zPhdKYmw2l24S+t5xUWApyk6ySfn3bH0FMqtOEgwOLLOhUEUxWlzqWA7DI+PLN8cWYz+Gi3R0OC+uXh5eXlyMpAItIy8uVjJeXl7KeAliyhBfENKWFd76hH8HTvCGmf0VYErbo5D9mfYJlQYhBmpblrCXzYLGu5wJifTqqIxcTDgvrugWdQotmuERYOj3QFp5u8F6gGbJwCd4QYFmsGRIZ6LATgwOwinAdXWKn4yYXFk1YCOlBV36cJahoUVhjKVyZjWfdtwgJl8vg8Q71SH1ZTi6smPMNMb5EzpYqbhaMvl5gOlIaV11H01ZMnpFalhQplRIbwSuTFh0OFv+/UwdzxbYqCJSBW2Ppe5kPHwtv8fS97n/aHWOlsIg7Cu2LJBfWLwNQNG943oyUE/MtwDKj9edjdP9LTDrxlz66eGsO5oOAWuaX+WTCgj5b+IC52NPnHGWd9+2Q4g6pE+un5jC7x8By3/+ja4j1UgVrrf9jrS1lrbXWWmutT6L/AVcGuBt0RlmiAAAAAElFTkSuQmCC" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Palabra del Dia!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions">
              <button className="btn btn-primary" onClick={toggleIframe1}>
                {showIframe1 ? 'Hide' : 'Show'} GAME
              </button>
            
              </div>
            </div>

           
            
          </div>
          {showIframe1 && (
                <iframe
                  src="https://lapalabradeldia.com/"
                  title="sd"
                  width="100%"
                  height="900"
                ></iframe>
              )}

                 {showIframe1 && (
                <iframe
                  src="https://lapalabradeldia.com/"
                  title="sd"
                  width="100%"
                  height="900"
                ></iframe>
              )}
          </div>
          </div>
        )}
      </div>
    
 
  </div>
  )
}

export default Games