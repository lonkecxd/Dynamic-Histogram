var datas = [];
var elements = [];
for(i=0;i<10;i++){
  datas.push(Math.random()*10+5)
}
console.log(datas);

var vm = new Vue({
  el: "#app",
  data:{
    datas: datas
  },
  methods:{
    gen_style(data){
      return {
        "height": data*20+"px",
        "background-color": "rgba(1,203,164,"+data/15+")"
      }
    }
  }
})

setInterval(()=>{
  var temp=[]
  for(i=0;i<10;i++){
  temp.push(Math.random()*10+5);
  }
  vm.datas = temp;
  
  },500)