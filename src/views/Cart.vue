<template>
  <div>
    <MyHeader />
      <div class="cart">
        <div class="row">
          <div class="cartHead">
            <div class="checkbox">
                <input type="checkbox">
                <span class="all" >全选</span>
            </div>
            <div class="goodInfo">商品信息</div>
            <div class="price">单价</div>
            <div class="number">数量</div>
            <div class="total">小计</div>
            <div class="sets">操作</div>
          </div>
          <div class="cartMain">
            <div class="item" v-for="(item,index) in 9" :key='index'>
                <div class="checkout">
                    <input type="checkbox" class="" title="" >
                </div>
                <div class="goodInfo">
                    <div class="pic">
                        <router-link :to="'/detail?id=0'">
                            <img src="https://yanxuan-item.nosdn.127.net/cef7e9cd82275612028abaed71b19fd0.png?quality=95&thumbnail=200x200&imageView" alt="">
                        </router-link>
                    </div>
                    <div class="nameCon">
                        <router-link :to="'/detail?id=0'">
                            男/女 清雅云端家居拖鞋
                        </router-link>
                        <div class="type">米色 M（38-39）</div>
                    </div>
                </div>
                <div class="price">¥39.90</div>
                <div class="number">
                    <span :class="number <= 1? 'noActive' :''" @click="numReduce" class="jian icon icon-reduce"></span>
                    
                    <input type="text" v-model="number">
                    <span @click="number++" class="jia icon icon-add"></span> 
                </div>
                <div class="total">
                    ¥99.90
                </div>
                <div class="sets">
                    <a href="javascript:;" class="addColl">加入收藏夹</a>
                    <a href="javascript:;" class="delete">删除</a>
                </div>
            </div>
          </div>
          <div class="cart-total">
              <div class="w-chkbox">
                  <input type="checkbox">
                  <span>已选（0）</span>
                  <a href="javascript:;">批量删除</a>
                  <a href="javascript:;">清空失效商品</a>
              </div>
              <div class="textInfo">
                  <div class="leftInfo">
                      <div class="itemsPrice">
                          <div class="linetext">
                              <span>商品合计 : </span>
                              <span>¥39.90</span>
                          </div>
                          <div class="linetext">
                              <span>已优惠 :  </span>
                              <span>-¥0.00</span>
                          </div>
                      </div>
                  </div>
                  <div class="rightInfo">
                      <div class="shouldPayMoney">
                          <span>应付总额：</span>
                          <span>¥ 39.90</span>
                      </div>
                  </div>
              </div>
              <div class="info">
                  <button>下单</button>
              </div>
          </div>
        </div>
      </div>
    <MyFooter />
  </div> 
</template>

<script>
import MyHeader from "@/components/MyHeader/MyHeader.vue";
import MyFooter from "@/components/MyFooter/MyFooter.vue";
export default{
  components: {  MyHeader, MyFooter },
    name:"cart",
    data(){
        return{
            number:1
        }
    },
    created(){
        
    },
    methods:{
        // 数量减
        numReduce(){
            if(this.number <= 1){
                this.number = 1;
                return
            }
            this.number--;
        },
    }
}
</script>

<style lang="scss" scoped>
    .cart{
        padding: 20px 0 0;
        .cartHead{
            display: flex;
            text-align: center;
            border: 1px solid #ddd;
            div{
                padding: 12px 0;
                background-color: #f5f5f5;
            }
            .checkbox{width: 138px;
                display: flex;
                align-items: center;
                justify-content: center;
                input{
                    width: 18px;
                    height: 18px;
                    vertical-align: middle!important;
                }
                .all{margin-left: 20px;}
            }
            .goodInfo{width: 300px;text-align: left;padding-left: 20px;}
            .price{width: 180px;}
            .number{width: 170px}
            .total{width: 150px;}
            .sets{width: 130px}
        }
        .cartMain{
            border: 1px solid #ddd;
            .item{
                padding: 20px 0;
                display: flex;
                align-items: center;
                border-bottom: 1px dashed #eaeaea;
                &:last-child{
                    border: none;
                }
                .checkout{
                    text-align: center;
                    position: relative;
                    color: #999;
                    width: 60px;
                    input{
                        display: inline-block;
                        width: 18px;
                        height: 18px;
                    }
                }
                .goodInfo{
                    display: flex;
                    .pic{
                        top: 50%;
                        float: left;
                        height: 100px;
                        width: 100px;
                        border: 1px solid #eaeaea;
                        img{
                            width: 100%;
                            height: 100%;
                            background-color: #f4f4f4;
                        }
                    }
                    .nameCon{
                        margin-left: 15px;
                        font-size: 14px;
                        padding-top: 10px;
                        text-align: left;
                        width: 300px;
                        min-height: 100px;
                        float: left;
                        line-height: 1;
                        .type{
                            color: #999;
                            margin-top: 10px;
                        }
                    }
                }
                .price{
                    width: 155px;
                    text-align: center;
                    position: relative;
                    color: #999;
                }
                .number{
                    width: 170px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    span,input{
                        display: inline-block;
                        width: 24px;
                        height: 24px;
                        line-height: 22px;
                        border: 1px solid #ddd;
                        text-align: center;
                        line-height: 24px;
                        box-sizing: border-box;
                        outline: none;
                    }
                    input{
                        display: inline-block;
                        width: 80px;
                    }
                }
                .total{
                    text-align: center;
                    position: relative;
                    color: #999;
                    width: 150px;
                }
                .sets{
                    position: relative;
                    color: #999;
                    text-align: center;
                    width: 125px;
                    a{
                        display: block;
                        color: #666;
                        font-size: 14px;
                    }
                }
            }
        }
        .cart-total{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 20px 0;
            font-size: 14px;
            position: relative;
            background-color: #f5f5f5;
            border: 1px solid #ddd;
            height: 70px;
            .w-chkbox{
                margin-left: 20px;
                input{
                    width: 18px;
                    height: 18px;
                    vertical-align: middle!important;
                }
                span{
                    margin-left: 14px;
                }
                a{
                    margin-left: 30px;
                }
            }
            .textInfo{
                display: flex;
                align-content: center;
                .leftInfo{
                    .itemsPrice {
                        margin: 10px 0;
                        padding: 0 30px;
                        border-right: 1px solid #ddd;
                        line-height: 14px;
                        height: 50px;
                        .linetext{
                            display: flex;
                            color: #999;
                            line-height: 30px;
                            span{
                                &:first-child{
                                    width:80px;
                                    margin-right: 20px;
                                    text-align: right;
                                }
                            }
                        }
                    }
                }
                .rightInfo{
                    margin-left:20px;
                    .shouldPayMoney{
                        line-height: 60px;
                        span{
                            &:last-child{
                                font-size: 22px;
                                font-weight: 700;
                                color: #BE4141;
                            }
                        }
                    }
                }
            }
            .info{
                button{
                    cursor: pointer;
                    outline: none;
                    border-radius: 0;
                    width: 140px;
                    height: 70px;
                    margin-top: -1px;
                    margin-right: -1px;
                    line-height: 50px;
                    font-size: 18px;
                    color: #fff;
                    border: 1px solid #b4a078;
                    background-color: #b4a078;
                }
            }
        }
    }
</style>

