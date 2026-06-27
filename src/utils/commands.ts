import { ApplicationCommandType, ApplicationIntegrationType, InteractionContextType, PermissionFlagsBits, type RESTPutAPIApplicationCommandsJSONBody } from "discord-api-types/v10";

export const commandsPayload: RESTPutAPIApplicationCommandsJSONBody = [
    {
        // this command opens a modal for configuring the honeypot
        name: "Snare",
        description: "Configure/setup the Snare channel and its settings",
        type: ApplicationCommandType.ChatInput,
        options: [],
        default_member_permissions:
            (PermissionFlagsBits.ManageGuild | PermissionFlagsBits.BanMembers | PermissionFlagsBits.ModerateMembers | PermissionFlagsBits.ManageMessages | PermissionFlagsBits.ManageChannels).toString(),
        integration_types: [ApplicationIntegrationType.GuildInstall],
        contexts: [InteractionContextType.Guild],
    },
    {
        // this command opens a modal for configuring the messages
        name: "Snare-messages",
        description: "Configure the Snare messages that the bot sends",
        type: ApplicationCommandType.ChatInput,
        options: [],
        default_member_permissions:
            (PermissionFlagsBits.ManageGuild | PermissionFlagsBits.BanMembers | PermissionFlagsBits.ModerateMembers | PermissionFlagsBits.ManageMessages | PermissionFlagsBits.ManageChannels).toString(),
        integration_types: [ApplicationIntegrationType.GuildInstall],
        contexts: [InteractionContextType.Guild],
    },
    {
        name: "stats",
        description: "See statistics for all servers using Snare",
        type: ApplicationCommandType.ChatInput,
        options: [],
        contexts: [InteractionContextType.BotDM],
    },
]

