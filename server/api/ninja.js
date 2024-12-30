export default defineEventHandler(async (event) => {
    //handle query params
    // const { name } = getQuery(event)
    // const { age } = await readBody(event)
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_9Wad8ZY1LLnBtRgGilamLzvV44pSr3ahAooHAWvC')
    return data
})