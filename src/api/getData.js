import axios from 'axios'

const service = axios.create({
    baseURL : "http://192.168.2.131:8086",
    timeout : 5000
});



//註冊
export const registerApi = (name,phone,pwd)=> service.post("/api/v1/pri/user/register",{
    "name": name,
    "phone": phone,
    "pwd": pwd
});

//登入
export const loginApi = (phone,pwd)=> service.post("/api/v1/pri/user/login",{
    "phone": phone,
    "pwd": pwd   
});

//查詢用戶資訊
export const getUserInfo = (token)=> service.get("/api/v1/pri/user/find_by_token",{
    params:{
        "token": token
    }
});

//查詢已經購買影片
export const getOrderList = (token) => service.get("/api/v1/pri/order/list",{
    params:{
        "token":token
    }
});

//下單接口
export const saveOrder = (token,id) => service.post("/api/v1/pri/order/orderBook",{
    "book_id": id
},{
    headers:{
        "token": token
    }
});

//輪播圖列表
export const getBanner  = ()=> service.get("/api/v1/pub/book/list_banner");

//書籍列表
export const getBookList = ()=> service.get("/api/v1/pub/book/list_book");

//查詢書籍資訊
export const getBookDetail = (id)=> service.get("/api/v1/pub/book/find_detail_by_id",{
    params:{
        "book_id" : id
    }
});




