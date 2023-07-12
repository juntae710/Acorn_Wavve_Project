let flag = true;
        function ek_btn_click(){
            let a = document.getElementById("page_voucher_banner");
            let b = document.getElementById("page_voucher_btn");
            if(flag==true){
                a.style.height = "auto";
                b.style.transform = "rotate(180deg)";
                flag = false;
            }else{
                a.style.height = "110px";
                b.style.transform = "rotate(0deg)";
                flag = true;
            }
        }