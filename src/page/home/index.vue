<template>
  <div>
        <a-button type="primary">
            Primary
        </a-button>
        <a-button>Default</a-button>
        <a-button type="dashed">
            Dashed
        </a-button>
        <a-button type="danger">
            Danger
        </a-button>
        <a-config-provider :auto-insert-space-in-button="false">
            <a-button type="primary">
            按钮
            </a-button>
        </a-config-provider>
        <a-button type="primary">
            按钮
        </a-button>
        <a-button type="link">
            Link
        </a-button>

        <div class="abc"> 
            test嘎嘎嘎嘎嘎过过过过过过
        </div>
  </div>
</template>


<script>

export default {
    name: 'home',
    data() {
        return {

        }
    }
}
</script>
<style lang="less" scoped>
@color: red;
// @import '/src/style/common.less';
.abc{
    color: @color;
}

</style>