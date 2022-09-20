import { useState } from "react";
import { moneyForm } from "../help";

function Header({total,money}){
    return(
        <>
            <div>
                {total >0&& money-total!==0&&(
                    <div className="header"> Harcayacak için {moneyForm(money-total)} $ kaldı</div>
                )}
                {total===0&&(
                    <div className="header"> Harcayacak için {moneyForm(money)} $ kaldı</div>
                )}
                {money-total ===0 &&(
                    <div className="header-empty">Paranız bitmiştir..</div>
                )
                }
                <style jsx>{`
                .header{
                    background-image: linear-gradient(cyan,green,yellow);
                    position:sticky;
                    top:0;
                    height:40px;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    color:#fff;
                    font-size:18px
                    letter-spacing:1.2px;
                }
                `}

                </style>
                
                
               
            </div>
        
        </>
    )
}

export default Header;