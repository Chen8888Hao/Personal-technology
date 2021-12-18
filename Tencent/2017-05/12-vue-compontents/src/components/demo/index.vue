<template>
  <div :class="_clas" :style="styl">

  </div>
</template>
<script>
import {
  cssPrefix
} from '@/utils/variable'

import mixins from '@/utils/mixins'

export default {
  mixins: [mixins.base],
  computed: {
    _clas() {
      return [cssPrefix + 'layout', this.clas]
    }
  },
  data() {
    return {
      cssPrefix
    }
  }
}

</script>
<style lang="less">
@import '~@/styles/variable.less';
@import '~@/styles/mixins.less';
.@{css-prefix}{
  & {

  }
}

</style>

