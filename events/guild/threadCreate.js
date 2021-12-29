module.exports = async (client, thread) => {
    if(thread.joinable){
        try{
            await thread.join();
        }catch (e){
            console.log(e)
        }
    }
}
/**
 * @INFO
 * Bot Coded by RôÑ#7322  https://discord.gg/7NBCPwaukq
 * @INFO
 * Work for Milrato Development | https://discord.gg/7NBCPwaukq
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
