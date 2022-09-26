//蛇对象
class Snake{
    constructor(select){
        this.map = document.querySelector(select);
        //蛇的运动方向
        this.direction = "right";
        //蛇数组
        this.snakelist = [];
        //调用蛇方法
        this.createSnake();
        // this.move();
    }

    //蛇头函数
    createHead(){
        //获取数组0位找到蛇头
        const head = this.snakelist[0];
        // console.log(head);

        //定义坐标
        const pos = {x:0,y:0};


        if (head) {
            //如果有蛇头，那么创建新的蛇头放到原来蛇头的坐标位置
            //新蛇头坐标一定发生改变，以下是改变的方向
            switch(this.direction) {
                case "left":
                    pos.x = head.offsetLeft - 20;  //向左，因为格子的宽为20
                    pos.y = head.offsetTop;
                    break;
                case "right":
                    pos.x = head.offsetLeft + 20;  //右
                    pos.y = head.offsetTop;
                    break;
                case "top":
                    pos.x = head.offsetLeft;  //上
                    pos.y = head.offsetTop - 20;
                    break;
                case "buttom":
                    pos.x = head.offsetLeft;  //下
                    pos.y = head.offsetTop + 20;
                    break;
                default:
                    break;
            }
            // console.log(pos.x,pos.y);
            //把原来的蛇头变成身体
            head.className = "body";
        }
        

        
        //蛇头
        const div = document.createElement("div");
        //样式
        div.className = "head";
        //蛇头存入数组
        this.snakelist.unshift(div);
        //蛇头定义坐标
        div.style.left = pos.x + "px";
        div.style.top = pos.y + "px";
        //放到地图
        this.map.appendChild(div);
    }

    //创建蛇
    createSnake() {
        for (let i = 0; i < 4; i++){
            this.createHead();
        }
    }

    //蛇移动的方法
    move() {
        //思路：把原来头部坐标后面增加一个蛇头，原本的蛇头变成身体，身体末尾位置删除一个，以此来实现 视觉上的移动
        //从数组中移除
        const body = this.snakelist.pop();
        // console.log(body);

        //从页面删除
        body.remove();

        //新增蛇头
        this.createHead();
    }

    //判断蛇有没有吃到食物
    isEat(foodX,foodY) {
        //判断头跟坐标是否一致
        const head = this.snakelist[0];
        const headX = head.offsetLeft;
        const headY = head.offsetTop;

        if (foodX === headX && foodY === headY) {
            return true;
        }
        return false;
    }

    //判断蛇死没死
    //是否撞墙
    isDie(){
        //判断蛇头是否越界
        const head = this.snakelist[0];
        const headX = head.offsetLeft;
        const headY = head.offsetTop;

        if (headX < 0 || headY < 0 || headX >= this.map.clientWidth || headY >= this.map.clientHight){
            return true;
        }
        return false;
    }
}