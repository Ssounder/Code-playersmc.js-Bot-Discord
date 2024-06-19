const Discord = require("discord.js");
const msu = require('minecraft-server-util');
const minecraftServerIP = "100."; // Reemplaza con la IP de tu servidor de Minecraft
const minecraftServerPort = 25560; // Reemplaza con el puerto de tu servidor de Minecraft


module.exports = {
    data: new Discord.SlashCommandBuilder()
    .setName("players")
    .setDescription("Ve los jugadores online."),

    execute: async(interaction) => { 
        // Función para obtener información del servidor de Minecraft
async function getServerInfo() {
    try {
        console.log('Intentando obtener información del servidor de Minecraft...');
        const response = await msu.status(minecraftServerIP, minecraftServerPort); 
        console.log('Información del servidor obtenida:', response);
        return response;
    } catch (error) {
        console.error('Error obteniendo información del servidor de Minecraft:', error);
        return null;
    }
}

// Comando para mostrar el número de jugadores conectados
        const serverInfo = await getServerInfo();
        const discutiremos = interaction.user; 

        const embed = new Discord.EmbedBuilder()
        .setColor("Green")
        .setDescription(`${serverInfo.players.online}/${serverInfo.players.max} Jugadores online \n\nIp: **Ip de tu servidor**\nDescripcion: **${serverInfo.motd.clean}**`)
        .setFooter({ text: `User: ${discutiremos.tag}`});  

        interaction.reply({ embeds: [embed] });

            console.error('No se pudo obtener información del servidor en este momento.');
        }
