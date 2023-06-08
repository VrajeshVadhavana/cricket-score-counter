            var fours=0;
            var f=0;
            window.value=0;
            let total = document.getElementById("total");
            function four(){
                f+=4;
                total.innerHTML=s+f+t+tw+o+ff;
                window.value=4;
                if(window.value==4){
                    document.getElementById('four').innerHTML=++fours;
                }
            }
            function back(){
                total.innerHTML=(s+f+t+tw+o+ff)-window.value;
                ff-=window.value;
                if(window.value==1){
                    document.getElementById('single').innerHTML=--single;
                }
                else if(window.value==2){
                    document.getElementById('double').innerHTML=--double;
                }
                else if(window.value==4){
                    document.getElementById('four').innerHTML=--fours;
                }
                else if(window.value==6){
                    document.getElementById('six').innerHTML=--sixes;
                }
            }
            var sixes=0;
            var s=0;
            function six(){
                s+=6;
                total.innerHTML=s+f+t+tw+o+ff;
                window.value=6;
                if(window.value==6){
                    document.getElementById('six').innerHTML=++sixes;
                }
            }
            var t=0;
            function three(){
                t+=3;
                total.innerHTML=s+f+t+tw+o+ff;
                var five = ff/5;
                window.value=3;
            }
            var ff=0;
            function five(){
                ff+=5;
                total.innerHTML=s+f+t+tw+o+ff;
                window.value=5;
            }
            var double=0;
            var tw=0;
            function two(){
                tw+=2;
                total.innerHTML=s+f+t+tw+o+ff;           
                window.value=2;
                if(window.value==2){
                    document.getElementById('double').innerHTML=++double;
                }
            }
            var single = 0;
            var o=0;
            function one(){
                o+=1;
                total.innerHTML=s+f+t+tw+o+ff; 
                window.value=1;
                if(window.value==1){
                    document.getElementById('single').innerHTML=++single;
                }
            }
            function targ(){
                var tar = document.getElementById('target').value;
                var tarr = tar - (s+f+t+tw+o+ff);
                if(target()==true){
                    document.getElementById('runs').innerHTML=tarr + " " + 'runs';
                }
             }
            function target(){
                let runs = document.getElementById('runs');
                    var zz = document.getElementById('target').value;
                    var zzz = zz-(s+f+t+tw+o+ff);
                 if(zzz==0 || zzz<0){
                    runs.style.color="red";
                     runs.innerHTML="set target";
                 }
                 else{
                        runs.style.color="red";
                        runs.innerHTML=zzz + " " +'runs';
                     }
                }
                var w = 0;
            function wicket(){
                if(w<9){
                w+=1;
                document.getElementById("wicket").innerHTML=w;
                window.value=0;
                }
                else{
                    w+=1;
                    document.getElementById("wicket").innerHTML=w;
                    alert("All out !!!");
                }
            }
            function wic(){
                if(w==0){
                    w = 0;
                }
                else{
                    var wic = 1;
                    w-=wic;
                    document.getElementById('wicket').innerHTML=w;
                }
            }
            var b=0;
            var c;
            var d=0;
            function ball(){
                let ball = document.getElementById('ball');
                b+=1;
                c=b%7;
    
                if(c/6==1){
                    ball.innerHTML=0;
                }
                else if(c==0){
                    b+=1;
                    ball.innerHTML=c;
                }
                else{
                    ball.innerHTML=c;
                }
                if(c%6==0 && c!==0){
                d+=1;
                document.getElementById("over").innerHTML=d;
                }
            }
            function bac(){
                window.value=0;
                b-=1;
                ba = 0;
                if(c%6==0 && c!==0){
                    d-=1;
                    var ba = 5;
                    document.getElementById('ball').innerHTML=ba;
                    document.getElementById('over').innerHTML=d;
                }
                else if(c==5){
                    var ba = 4;
                    document.getElementById('ball').innerHTML=ba;    
                }
                else if(c==4){
                    var ba = 3;
                    document.getElementById('ball').innerHTML=ba;
                }
                else if(c==3){
                    var ba = 2;
                    document.getElementById('ball').innerHTML=ba;
                }
                else if(c==2){
                    var ba = 1;
                    document.getElementById('ball').innerHTML=ba;
                }
                else{
                    var ba = 0;
                    document.getElementById('ball').innerHTML=ba;
                }
                
            }
           function ext(){
               let ball = document.getElementById('ball');
               if(c==0){
                   c+=1;
                    ball.innerHTML=c;
               }
            }
            function refresh(){
                location.reload();
            }
            
            function btn(){
                document.getElementById('back').disabled=true;
            }
            function btn1(){
                document.getElementById('back').disabled=false;
            }
                document.getElementById('back').disabled=true;
            document.addEventListener("scroll",()=>{
                document.documentElement.requestFullscreen().catch((e)=>{console.log(e);});
            });
            document.addEventListener("click",()=>{
                document.documentElement.requestFullscreen().catch((e)=>{console.log(e);});
            });