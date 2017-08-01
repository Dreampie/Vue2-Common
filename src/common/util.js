/**
 * Created by wangrenhui on 2017/5/11.
 */

const PATTERN_DOMAIN = /((\.[^\\.:/]+\.[^\\.:/]+)|localhost)(:\d+)?$/i

const DomainSolver = {
    getTopDomain: (rootUrl) => {
        return rootUrl ? rootUrl.match(PATTERN_DOMAIN)[1] : rootUrl
    }
}


export {DomainSolver}
