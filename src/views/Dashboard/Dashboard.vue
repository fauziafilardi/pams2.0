<template>
  <div class="dashboard-page">
    <div class="dashboard-page__title">
      <b-row>
        <b-col cols="12">
          {{ $t("dashboard") }}
        </b-col>
      </b-row>
    </div>
    <!-- <div class="dashboard-page__body">
      <b-row>
        <b-col cols="2">
          <div class="box--counting box-outline--red">
            <div class="box--counting__number">23</div>
            <div class="box--counting__title">Total Data</div>
          </div>
        </b-col>
        <b-col cols="2">
          <div class="box--counting box-outline--green">
            <div class="box--counting__number">100</div>
            <div class="box--counting__title">Total Data</div>
          </div>
        </b-col>
        <b-col cols="2">
          <div class="box--counting box-outline--green">
            <div class="box--counting__number">100</div>
            <div class="box--counting__title">Total Data</div>
          </div>
        </b-col>
        <b-col cols="3">
          <div class="box--counting box-outline--grey">
            <div class="box--counting__number">45</div>
            <div class="box--counting__title">Total Data</div>
          </div>
        </b-col>
        <b-col cols="3">
          <div class="box--counting box-outline--blue">
            <div class="box--counting__number">1500</div>
            <div class="box--counting__title">Total Data</div>
          </div>
        </b-col>
        <b-col cols="6">
          <div class="box--counting">
            <div class="box--counting__number">23</div>
            <div class="box--counting__title">Total Data</div>
          </div>
        </b-col>
        <b-col cols="6">
          <div class="box--counting">
            <div class="box--counting__number">1456</div>
            <div class="box--counting__title">Total Data</div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6">
          <div class="box--graphic">
            <div class="box--graphic__body">
              <pie-chart :data="dataPie"></pie-chart>
            </div>
          </div>
        </b-col>
        <b-col cols="6">
          <div class="box--graphic">
            <div class="box--graphic__body">
              <pie-chart :data="dataPie"></pie-chart>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="4">
          <div class="box--graphic">
            <div class="box--graphic__body">
              <pie-chart :data="dataPie"></pie-chart>
            </div>
          </div>
        </b-col>
        <b-col cols="4">
          <div class="box--graphic">
            <div class="box--graphic__body">
              <pie-chart :data="dataPie"></pie-chart>
            </div>
          </div>
        </b-col>
        <b-col cols="4">
          <div class="box--graphic">
            <div class="box--graphic__body">
              <area-chart :data="dataArea"></area-chart>
            </div>
          </div>
        </b-col>
      </b-row>
    </div> -->
    <div class="dashboard-page__body">
      <b-row>
        <b-col>
          <!-- <b-form-input
            type="text"
            v-model="value"
            class="text-field-form"
          />
          <iframe :src="value" style="border:none;height:550px;width:1000px;"></iframe> -->
          <!-- <ABSPreviewReport
              cVisible="true"
              :cSrc="dataurl"
          /> -->
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataurl:'http://192.168.6.98/ReportPams/ReportsTemplate?Oid=cfcd208495d565ef66e7dff9f98764da',
      dataPie: [
        ['Blueberry', 44],
        ['Strawberry', 23]
      ],
      dataArea: {
        '2017-01-01 00:00:00 -0800': 2,
        '2017-01-02 00:01:00 -0800': 5,
        '2017-01-03 00:02:00 -0800': 10,
        '2017-01-04 00:03:00 -0800': 11,
        '2017-01-05 00:04:00 -0800': 30,
        '2017-01-06 00:05:00 -0800': 45,
        '2017-01-07 00:06:00 -0800': 50,
        '2017-01-08 00:07:00 -0800': 10
      }
    }
  }
}
</script>
