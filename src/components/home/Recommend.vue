<template>
  <div class="recommend">
    <div class="recommend-container">
      <div class="recommend-l">
        <div class="recommend-item">
          <div class="recommend-img">
            <img
              src="https://gw.alicdn.com/bao/uploaded/i1/2210930374132/O1CN01SFwfon1gOVHVM13q2_!!0-item_pic.jpg_320x320q90.jpg_.webp"
              alt=""
            />
          </div>
          <div class="recommend-info">
            <div class="recommend-title">
              极限竞速地平线5游戏标志评分汽车贴纸按下f进入载具车贴装饰防水
            </div>
            <div class="recommend-price-box">
              <div class="recommend-sign">￥</div>
              <div class="recommend-price">5.8</div>
              <div class="recommend-payed">100</div>
            </div>
          </div>
        </div>
        <div class="recommend-item">
          <div class="recommend-img">
            <img
              src="https://gw.alicdn.com/bao/uploaded/i1/6000000006047/O1CN01VZM1YQ1uXZq2CC36n_!!6000000006047-0-sm.jpg_320x320q90.jpg_.webp"
              alt=""
            />
          </div>
          <div class="recommend-info">
            <div class="recommend-title">
              百事可乐无糖汽水330ml*24罐碳酸饮料整箱0糖0脂0卡
            </div>
            <div class="recommend-price-box">
              <div class="recommend-sign">￥</div>
              <div class="recommend-price">69.9</div>
              <div class="recommend-payed">6000+</div>
            </div>
          </div>
        </div>
      </div>
      <div class="recommend-r">
        <div class="recommend-item">
          <div class="recommend-img">
            <img
              src="https://gw.alicdn.com/bao/uploaded/i1/2210930374132/O1CN01SFwfon1gOVHVM13q2_!!0-item_pic.jpg_320x320q90.jpg_.webp"
              alt=""
            />
          </div>
          <div class="recommend-info">
            <div class="recommend-title">
              极限竞速地平线5游戏标志评分汽车贴纸按下f进入载具车贴装饰防水
            </div>
            <div class="recommend-price-box">
              <div class="recommend-sign">￥</div>
              <div class="recommend-price">5.8</div>
              <div class="recommend-payed">100</div>
            </div>
          </div>
        </div>
        <div class="recommend-item">
          <div class="recommend-img">
            <img
              src="https://gw.alicdn.com/bao/uploaded/i1/6000000006047/O1CN01VZM1YQ1uXZq2CC36n_!!6000000006047-0-sm.jpg_320x320q90.jpg_.webp"
              alt=""
            />
          </div>
          <div class="recommend-info">
            <div class="recommend-title">
              百事可乐无糖汽水330ml*24罐碳酸饮料整箱0糖0脂0卡
            </div>
            <div class="recommend-price-box">
              <div class="recommend-sign">￥</div>
              <div class="recommend-price">69.9</div>
              <div class="recommend-payed">6000+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.recommend {
  width: 100%;
  overflow: hidden;
  .recommend-container {
    display: flex;
    width: 100%;
    padding: 0 2.6667vw;
    .recommend-l,
    .recommend-r {
      width: 48vw;
      overflow: hidden;
      .recommend-item {
        width: 45.6vw;
        height: 66.6667vw;
        margin: 2.4vw 1.2vw 0;
        border-radius: 2.6667vw;
        background-color: #fff;
        overflow: hidden;
        .recommend-img {
          width: 100%;
          height: 45.6vw;

          img {
            display: block;
            width: 100%;
            height: 45.6vw;
          }
        }
        .recommend-info {
          padding: 0 4vw;
          .recommend-title {
            position: relative;
            margin-top: 3.067vw;
            height: 9.8667vw;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 3.7333vw;
          }
          .recommend-price-box {
            display: flex;
            align-items: center;
            margin-top: 1.3333vw;
            line-height: 5.3333vw;
            height: 5.3333vw;
            .recommend-sign {
              font-size: 2.9333vw;
              color: #ff5500;
            }
            .recommend-price {
              font-size: 3.7333vw;
              line-height: 4.2667vw;
              color: #ff5500;
            }
            .recommend-payed {
              font-size: 2.9333vw;
              color: #999;
              margin-top: 0.5333vw;
              margin-left: 2.6667vw;
            }
          }
        }
      }
    }
    .recommend-r {
      .recommend-item {
        width: 45.6vw;
        height: 69.35vw;
        margin: 2.4vw 1.2vw 0;
        .recommend-info {
          .recommend-price-box {
            margin-top: 2.6667vw;
          }
        }
      }
    }
  }
}
</style>
