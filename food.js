//food类的定义
//食物的操作
//1.坐标位置
//2.生成食物
//3.更新
class Food{
    constructor(select){
        this.map = document.querySelector(select);
        //创建食物
        this.food = document.createElement("div");
        //定义样式
        this.food.className = "food";
        //放到地图中
        this.map.appendChild(this.food);
        //定义坐标
        this.x = 0;
        this.y = 0;
        //调用生成食物的方法
        this.foodPos();
    }
    //随机坐标点
    foodPos(){
        //1.拿到地图范围
        console.log(this.map.clientWidth/20);  //通过clientWidth可以得到地图的宽高
        console.log(this.map.clientHeight/20);  //黑色格子的宽高都是20px，所以除以20可以得到每行每列的格子数

        const w_nub = this.map.clientWidth/20;  //把格子数赋值给w_nub
        const h_nub = this.map.clientHeight/20;  //50*30的格子
        //2.随机生成数字
        let n1 = Math.floor(Math.random() * w_nub);  //floor向下取整，random随机数
        let n2 = Math.floor(Math.random() * h_nub);
        console.log(n1,n2);  //得到两个随机数
        //3.根据随机数进行坐标位置的计算
        this.x = n1 * 20;  //随机数*20得到的才是坐标数
        this.y = n2 * 20; //计算随机数的时候除以了20
        console.log(this.x,this.y);
        //4.赋值
        this.food.style.left = this.x + "px";
        this.food.style.top = this.y + "px";
        //每次刷新食物都会随机显示
    }

}