<template>
<div>
  sssssssss
  
    <el-table
          height="380px"
          border
          stripe
         
          :data="mList"
          
        >
 
            <el-table-column
              :prop="col.prop"
              :label="col.label"
              v-for="(col, index) in ListCols"
              v-bind:key="index"
              :width="col.width"
              :fixed="col.fixed"
              :show-overflow-tooltip="true"
            >
            </el-table-column>
     
        </el-table>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
    
     ListCols: [
        { label: "类型", prop: "id", width: "120" },
        { label: "名称", prop: "name", width: "170" },
        
      ],
      mList:[{
        id:1,
        name:"1222"
      },{
        id:1,
        name:"1222"
      },{
        id:1,
        name:"1222"
      },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
