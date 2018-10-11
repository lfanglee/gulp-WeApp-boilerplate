/*<remove trigger="prod">*/
import {
    test
} from '../../lib/api-mock.js'
/*</remove>*/

/*<jdists trigger="prod">
import { test } from '../../lib/api';
</jdists>*/

Page({
    data: {
        answer: 3
        // answer: test(1, 2)
    },
})