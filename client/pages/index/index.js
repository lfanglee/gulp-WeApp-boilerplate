import utils from '../../mixins/utils';

Page({
    data: {
        motto: 'hello, world!',
    },
    computed: {
        todo() {
            return '使用方式与vue计算属性相同';
        }
    },
    mixins: [utils],
    onLoad() {
        this.hello();  // mixins中定义方法
    }
});
