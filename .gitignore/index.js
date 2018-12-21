const Discord = require('discord.js');

var fs = require('fs');

const client = new Discord.Client();

var prefix = "!";

client.login(process.env.TOKEN);

client.login(process.env.TOK);

client.on("ready", () => {
  console.clear();
  console.log("\nC:/Users/degai/Desktop/GamerBot> node index.js");
  console.log("\nPrincipaleBot est allumé !\n");
  client.user.setActivity("se faire dévelloper par BestPaladin");
}); 

var mc = ":robot: Vous n'avez pas la permission d'effectuer une commande dans les messages privés. :robot:";

client.on("message", message => {
    if(message.content === "!ping" || message.content === "?ping") {
      if(message.channel.type === "dm") return message.channel.send(mc);
        message.channel.send(":robot: Pong ! :robot:");
        console.log("Un utilisateur (" + message.author.username +") à fait la commande !ping.")
    }
})

client.on("message", message => {
    if(message.content === "Kick moi, GamerBot !" || message.content === "Kick moi, EolasBot !") {
      if(message.channel.type === "dm") return message.channel.send(mc);
        message.author.kick;
        message.channel.send(message.author.username + " a souhaité etre kick...\nJ'ai donc réalisé son rêve...")
        console.log("Un utilisateur (" + message.author.username +") à demandé a être kick.")
    }
})

client.on("message", message => {
  if(message.content.startsWith("!joue") || message.content.startsWith("?joue")) {
    if(message.channel.type === "dm") return message.channel.send(mc);
    message.channel.bulkDelete("1");
    var args = message.content.split(' ').join(' ').slice(5);
    if(!args) return message.channel.send("Vous devez ajouter un jeu auquel vas jouer PrincipaleBot !");
    client.user.setActivity(args);
    console.log("Un utilisateur (" + message.author.username +") à fait la commande !joue.")
  }
})

client.on("message", message => {
    if(message.content === "?rules") {
        if(message.channel.type === "dm") return message.channel.send(mc);
        message.channel.send("Voici les rêglements du serveur Gamers:\n\n :earth_africa: Général :earth_africa: \n\n :arrow_right: Pas de spam\n :arrow_right: Pas de flood d'emoji (Pas plus que 5 dans une même phrase si non avertissement + suppresion du message\n :arrow_right: Pas de contenue pornografique, raciste ou conduisant à un sentiment de haine\n :arrow_right: Pas de message dans le mauvais salon risque d'avertissement + suppresion du message\n :arrow_right: Si vous trouver une façon de mentionner everyone ou here veuiller en avisée immédiatement un membre du staff qui sauras le rêgler\n :arrow_right: Si vous avez les permissions de parler dans un salon non-autorisée au membre, veuiller en aviser un membre du staff\n :arrow_right: Pas de spam mention si non mute 5 min ou si persicte ban\n\n:loud_sound: Vocal :loud_sound: \n\n :arrow_right: Pas de spam co reco ainsi créeant un bruit désagréable à entendre\n :arrow_right: Les insulte en vocal serons sanctionner par un ban 1 semaine\n :arrow_right: Toute personne (saufe staff) criant en vocal seras mute 10 min\n :arrow_right: Tout arcèlement en vocal seras sanctionner par un ban définitif\n\nAutre :\n\n Pas le droit de poster plus d’un lien par 24 heures si cette règle est pas respecté une suppression du lien sera mis en place plus un warn.\n :sunglasses:  La drague n'est pas autoriser sur le serveur:sunglasses:\n\nSi vous avez des problème qui ne vienne pas de à l'intérieure du serveur, vous vous inviterons à les rêgler autre par mais pas sur le serveur et ni en vocal\n\nVeuiller cocher cette réaction :white_check_mark: si vous avais lue et que vous acceptez de respecter ces rêglements\n\nCordialement  toute l'équipe de Gamers\n\nPS : Si la @⭐️ | Team {Staff} juge nécessaire de devoir avertir un membre même si la règle est pas écrite, c’est permis mais cela va occasionné juste un warn pas de ban.");
        console.log("Un utilisateur (" + message.author.username +") à fait la commande !rules.")
        message.delete;
    }
})

client.on("message", message => {
    if(message.content === "!help") {
      if(message.channel.type === "dm") return message.channel.send(mc);
        console.log("Un utilisateur (" + message.author.username +") à fait la commande !help.")
        message.channel.bulkDelete(1).then();
        var embed2 = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("Voici les commandes du serveur :")
        .setThumbnail(message.author.avatarURL)
        .addField("!help", "Afficher cette aide")
        .addField("!ping", "Savoir si le bot est en ligne")
        .addField("!rules", "Règles du serveur EolasPVP")
        .addField("!joue [jeu]", "Faire faire un jeu au bot")
        .addField("!clear [nombre]", "`Pour le staff` suprime les nombre de messages demandé")
        .addField("!cc", "`Pour le staff` suprime tous les messages d'un channel")
        .addField("!peudo", "Renvois son propre pseudo")
        .addField("!ms", "Combien est-on sur le serveur ?")
        .addField("!kick [mention]", "`Pour le staff` Expulse le joueur mentionné")
        .addField("!ban [mention]", "`Pour le staff` Ban le joueur mentionné")
        .addField("!invite", "Tu veut le bot sur ton serveur ?")
        .addField("!aidebot", "Affiche l'aide des bots sur le serveur")
        .addField("mute [mention]", "`Pour le staff` mute le joueur mentionné")
        .addField("unmute [mention]", "`Pour le staff` unmute le joueur mentionné")
        .setFooter("Demandé par " + message.author.username )
        message.channel.send(embed2);
    }
})

client.on("message", message => {
    if(message.content === "?help") {
      if(message.channel.type === "dm") return message.channel.send(mc);
        console.log("Un utilisateur (" + message.author.username +") à fait la commande ?help.")
        message.channel.bulkDelete(1).then();
        var embed2 = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("Voici les commandes du serveur :")
        .setThumbnail(message.author.avatarURL)
        .addField("?help", "Afficher cette aide")
        .addField("?ping", "Savoir si le bot est en ligne")
        .addField("?rules", "Règles du serveur Gamers")
        .addField("?joue [jeu]", "Faire faire un jeu au bot")
        .addField("?clear [nombre]", "`Pour le staff` suprime les nombre de messages demandé")
        .addField("?cc", "`Pour le staff` suprime tous les messages d'un channel")
        .addField("?peudo", "Renvois son propre pseudo")
        .addField("?ms", "Combien est-on sur le serveur ?")
        .addField("?kick [mention]", "`Pour le staff` Expulse le joueur mentionné")
        .addField("?ban [mention]", "`Pour le staff` Ban le joueur mentionné")
        .addField("?invite", "Tu veut le bot sur ton serveur ?")
        .addField("?aidebot", "Affiche l'aide des bots sur le serveur")
        .addField("mute [mention]", "`Pour le staff` mute le joueur mentionné")
        .addField("unmute [mention]", "`Pour le staff` unmute le joueur mentionné")
        .setFooter("Demandé par " + message.author.username )
        message.channel.send(embed2);
    }
})

client.on("message", message => {
    if(message.content.startsWith("!clear") || message.content.startsWith("?clear")) {
      if(message.channel.type === "dm") return message.channel.send(mc);
        var args = message.content.split(' ').join(' ').slice(6);
        message.channel.bulkDelete(args + 1).then();
        console.log("Un utilisateur (" + message.author.username +") à fait la commande !clear.")
    }
})

client.on("message", message => {
    if(message.content === "!cc" || message.content === "?cc") {
      if(message.channel.type === "dm") return message.channel.send(mc);
      message.channel.bulkDelete(1);
      message.channel.send("Commande fermée pour raison : bug de différents bots.");
        console.log("Un utilisateur (" + message.author.username +") à fait la commande !cc.")
    }
})

client.on("message", message => {
    if(message.content === "!pseudo" || message.content === "?pseudo") {
      if(message.channel.type === "dm") return message.channel.send(mc);
        message.channel.send(message.author.username)
        console.log("Un utilisateur (" + message.author.username +") à fait la commande !pseudo.")
    }
})

client.on("message", message => {
    if(message.content === "!ms") {
      if(message.channel.type === "dm") return message.channel.send(mc);
        message.delete;
        message.channel.send("Nombre de membres sur le serveur : " + message.guild.members.size - 5)
        console.log("Un utilisateur (" + message.author.username +") à fait la commande !ms.")
    }
})

client.on("message", message => {
    if(message.content === "?ms") {
      if(message.channel.type === "dm") return message.channel.send(mc);
        message.delete;
        message.channel.send("Nombre de membres sur le serveur : " + message.guild.members.size - 8)
        console.log("Un utilisateur (" + message.author.username +") à fait la commande ?ms.")
    }
})

client.on("message", message => {
  if(message.content === "Bonjour, GamerBot !" || message.content === "Salut, GamerBot !" || message.content === "Bonjour, EolasBot !" || message.content === "Salut, EolasBot !") {
      message.channel.send("Salut " + message.author.username + " !");
      console.log("Un utilisateur (" + message.author.username +") m'as dis bonjour.")
  }
})

client.on("message", message => {
    if(message.content === "Ca va, GamerBot ?" || message.content === "Ca va, EolasBot ?") {
        message.channel.send("Oui, et toi ?");
        console.log("Un utilisateur (" + message.author.username +") m'as demandé si j'allais bien.")
    }
  })


  client.on("message", message => {
    if(message.content === "Moi aussi, GamerBot." || message.content === "Moi aussi, EolasBot.") {
        message.channel.send("Ah cool !");
        console.log("Un utilisateur (" + message.author.username +") m'as dit qu'il allais bien lui aussi.")
    }
  })


  client.on("message", message => {
    if(message.content === "Tu fais quoi, GamerBot ?" || message.content === "Tu fais quoi, EolasBot ?") {
        message.channel.send("Là, je suis en train de me faire dévelloper par BestPaladin !");
        console.log("Un utilisateur (" + message.author.username +") m'as demandé qu'est-ce-que je suis en train de faire.")
    }
  })
client.on("message", message => {
    if(message.content.startsWith("!kick") || message.content.startsWith === "?kick"){
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission!");
    
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez metionner un utilisaeur")
        }
        var kick = message.guild.member(message.mentions.users.first());
        if(!kick) {
            return message.channel.send("Je ne sais pas si l'utilisateur existe :/")
        }
    
        kick.kick().then(member => {
            message.channel.send(`${member.user.username} à été kick pas ${message.author.username}`);
        });
    }

    if(message.content.startsWith(prefix + "ban") || message.content === "?ban") {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la perission");

        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur");
        }

        var ban = message.guild.member(message.mentions.users.first());
        if(!ban) {
            return message.channel.send("Je ne sais pas si l'utilisateur existe");
        }
        ban.ban().then(member => {
            message.channel.send(`${member.user.username} est ban par ${message.author.username} !`)
;})}})

  client.on("message", message => {
    if(message.content === "C'est qui le meilleur ?") {
        message.channel.send(":point_right: C’est `Dovakid` le meilleur, tout le monde le sait ! :point_left:\nC’est quand même lui le roi ! :crown:")
        console.log("Un utilisateur (" + message.author.username +") a demandé qui étais le meilleur.")
    }
})

client.on("message", message => {
    if(message.content === "GamerBot ?" || message.content === "EolasBot ?") {
        message.channel.send("Pourquoi tu me mentionne ?\nNon mais laisse moi tranquille !")
        console.log("Un utilisateur (" + message.author.username +") a mentionné le Bot.")
    }
})


client.on("message", message => {
    if(message.content === "Discord de BestPaladin") {
        message.channel.send("Son discord : \n https://discordapp.com/invite/Pf8KY7M");
        console.log("Un utilisateur (" + message.author.username +") a dis Dovakid.");
    }
})

client.on("message", message => {
    if(message.content === "!invite" || message.content === "?invite") {
        message.channel.send(":robot: Désolé mais je suis un bot privé... :robot:");
        message.delete;
        console.log("Un utilisateur (" + message.author.username +") a éffectuer la commande !invite.")
    };
})

client.on("message", message => {
    if(message.content === "Casse toi, GamerBot !"|| message.content === "Casse toi, EolasBot !") {
        message.channel.send("Message pour `" + message.author.username +"` :\nSachant que je peut te ban, tu ne devrait pas me dire de partir...");
        console.log("Un utilisateur (" + message.author.username +") a dis au bot de se casser.")
    };
})

client.on("message", message => {
    if(message.content === "Méchant, GamerBot !" || message.content === "Méchant, EolasBot !") {
        message.channel.send("D'accord `" + message.author.username +"`, je serai plus sage la prochaine fois...");
        console.log("Un utilisateur (" + message.author.username +") a dis au bot de se casser.")
    };
})

client.on("message", message => {
    if(message.content === "Quelles sont tes répliques, GamerBot ?") {
        var embed = new Discord.RichEmbed()
        .setTitle("Répliques :")
        .addField("Bonjour, GamerBot !", "Proposé par BestPaladin")
        .addField("Ca va, GamerBot ?", "Proposé par BestPaladin")
        .addField("Moi aussi, GamerBot.", "Proposé par BestPaladin")
        .addField("Tu fais quoi, GamerBot ?", "Proposé par BestPaladin")
        .addField("Casse toi, GamerBot !", "Proposé par warriorgame")
        .addField("C'est qui le meilleur ?", "Proposé par dovakid")
        .addField("Méchant, GamerBot !", "Proposé par BestPaladin")
        .addField("GamerBot ?", "Proposé par PhenixYT")
        .addField("Quelles sont tes répliques, GamerBot ?", "Proposé par BestPaladin")
        .addField("PhenixYT ?", "Proposé par PhenixYT")
        .addField("C'est qui le mec de Talia ?", "Proposé par Ŧãℓiα ｡◕‿◕ღ")
        .addField("C'est qui la meilleur ?", "Proposé par BestPaladin")
        .setColor('RANDOM')
        .setFooter("Serveur : ❄🎮Gamers🎮❄ - Photo du bot pas définitive")
        .setThumbnail(client.user.avatarURL)
        message.channel.send(embed);
        console.log("Un utilisateur (" + message.author.username +") a demandé mes répliques.");
    };
})

client.on("message", message => {
    if(message.content === "PhenixYT ?") {
        message.channel.send(":no_entry_sign: Il est occupé donc tais toi maintenant ! :no_entry_sign:");
        message.delete;
        console.log("Un utilisateur a dis 'PhenixYT ?'.")
    };
})

client.on("message", message => {
    if(message.content === "!aidebot") {
      if(message.channel.type === "dm") return message.channel.send(mc);
        message.channel.bulkDelete(1).then();
        message.channel.send("Voici les aides au commandes disponibles sur le serveur :\n\nAIDE :\n`/new [raison]` : permet d'ouvrir un salon privé pour poser des questions\n`/close fermer` : permet de fermer son salon privé pour questions\n\nFUN :\n`/blagues` : Envoyer une blague aléeatoire\n`/vdm` : Envoyer une vie de merde (blague)\n`/bingo` : Vas-tu tombé sur le bon nombre ? (jeu)\n`/morpion` : joues au morpion avec d'autres joueurs\n`/pof` : permet de faire un pile ou face\n`!rank ([mention])` : Obtenez votre rang ou le rang de quelqu'un\n\nMUSIQUE :\n`/play ([titre de la musique])` : ajoute une musique à la file d'attente  (être en vocal dans MUSIQUE)\n`/skip` : passe a la musique suivante\n\nAUTRES : \n`!rules` : afficher les règles du serveur\n`!ip` : affiche l'ip du serveur\n`!youtube [nom]` : Rechercher des vidéos YouTube\n`!ms` : Affiche le nombre de membres sur le serveur.\n\nUn systeme automatique donne des sanctions au bout d'un nombre déterminé d'avertissements (warns). \ntemp_ban - 1 jour -> 3 infractions\nkick              -> 7 infractions\nban               -> 10 infractions\n\nMODERATION (pour les modos et admins) :\n*`!ban [mention] [raison]` : banit un utilisateur du serveur\n*`!tempban [mention] [temp] [raison]` : bannit temporairement un utilisateur du serveur\n`!clear` : Supprimer les messages d'un channel\n*`!infractions [mention]` : affiche le nombre d'infractions qu'un utilisateur as\n*`!kick [mention] [raison]` : kick un utilisateur du serveur\n*`!mute [mention] [raison]` : mute un utilisateur dans l'ensemble du serveur\n*`!tempmute [mention] [temp] [raison]` : mute temporairement un utilisateur sur l'ensemble du serveur\n*`!slowmode [n°secondes ou off]` : Active / désactive slowmode dans un canal\n*`!unmute [mention]` : enlève le mut d'un utilisateur\n*`!warn [mention] [message]` : Avertit un utilisateur");
        console.log("Un utilisateur à fait la commande !aidebot.")
    }
})

client.on("message", message => {
    if(message.content === "?aidebot") {
      if(message.channel.type === "dm") return message.channel.send(mc);
        message.channel.bulkDelete(1).then();
        console.log("Un utilisateur à fait la commande !aidebot.")
        return message.channel.send(":cry: Commande indisponible pour le moment ! :cry:");
        var embed5 = Discord.RichEmbed()
        .setTitle("Commandes disponibles sur le serveur :")
        .setColor('RANDOM')
        .setFooter("demandé par " + message.author.username + " - commandes disponibles sur le serveur")
        .setThumbnail(client.user.avatarURL)
        .addField("!help", "Pour en savoir + sur les commandes du bot.")
    message.channel.send(embed5)
}
})

client.on("message", message => {
    if(message.content === "!rules") {
      if(message.channel.type === "dm") return message.channel.send(mc);
        message.channel.bulkDelete(1).then();
        message.channel.send("@everyone\n`Voici les règles du serveur :`\n`1.` Ne pas utiliser de pseudo a caractere nuisant.\n`2.` @everyone interdits en tant que membre (ou VIP)\n`3.` A l'oral comme à l'audio, merci de respecter les règles de politesses de la vraie vie. Tout signalement de nuisance  signalé sera passible d'un ban.\n`4.` Un service automatique de ban à été mis sur le serveur (pour + d'informations faites !aidebot).\n`5.` C'est correct d'avoir des opinions et de les exprimer clairement, mais essaye d'être gentil à ce sujet ...\n     (Si vous commencez à vous sentir sur le point d'exploser ... Faite une pause pour vous calmer !)\n`6.` Ce qui suit est interdit :\n     `a -` harcèlement / abus des autres membres (que ce soit le staff ou autre)\n     `b -` contenu injurieux, raciste, sexiste, sexuellement explicite ou offensant\n     `c -` liens vers des contenus piratés ou illégaux\n     `d -` partager des informations personnelles ou confidentielles sur un autre utilisateur ou sur soi même\n     `e -` spam (sauf dans le #spam-level-up-game), autopromotion ou publicité d'autres communautés / services\n     `f -` Ne pas usurper l'identité d'autres joueurs\n     `g -` abuser des problèmes n'est pas autorisé\n     `h -` pas de menaces de piratage ou de menaces contre le serveur\n     `i -` le texte zalgo (Čəćį ęşť űņ țėxţě żāłğő.)\n`7.` Gardez vos différends personnels privés.\n     `a -` Pas de querelle publique, merci de résoudre vos problèmes en privé.\n     `b -` Ne parle pas de choses d'argent réel avec quelqu'un qui vous possède quelque chose.\n`Code d'invitaton (pour vos amis) :` https://discord.gg/Pf8KY7M\n@everyone\n");
        console.log("Un utilisateur à fait la commande !rules.")
    }
})


client.on("message", message => {
    if(message.content === "Quelles sont tes répliques, EolasBot ?") {
        var embed = new Discord.RichEmbed()
        .setTitle("Répliques :")
        .addField("Bonjour, EolasBot !", "Proposé par BestPaladin")
        .addField("Ca va, EolasBot ?", "Proposé par BestPaladin")
        .addField("Moi aussi, EolasBot.", "Proposé par BestPaladin")
        .addField("Tu fais quoi, EolasBot ?", "Proposé par BestPaladin")
        .addField("Casse toi, EolasBot !", "Proposé par warriorgame")
        .addField("C'est qui le meilleur ?", "Proposé par dovakid")
        .addField("Méchant, EolasBot !", "Proposé par BestPaladin")
        .addField("EolasBot ?", "Proposé par PhenixYT")
        .addField("Quelles sont tes répliques, EolasBot ?", "Proposé par BestPaladin")
        .addField("PhenixYT ?", "Proposé par PhenixYT")
        .addField("C'est qui le mec de Talia ?", "Proposé par Ŧãℓiα ｡◕‿◕ღ")
        .addField("C'est qui la meilleur ?", "Proposé par BestPaladin")
        .addField("Tu file des headshoot !", "Proposé par ")
        .setColor('RANDOM')
        .setFooter("Serveur : ❄🎮Gamers🎮❄ - Photo du bot pas définitive")
        .setThumbnail(client.user.avatarURL)
        message.channel.send(embed);
        console.log("Un utilisateur (" + message.author.username +") a demandé mes répliques.");
    };
})

client.on("message", message => {
    if(message.content === "Koala L'aspirateur ?") {
        message.channel.send("Je te conseille de le laisser tranquille.\n(Laisse les personnes débile ensembles...)");
        message.delete;
        console.log("Un utilisateur a dis 'Koala L'aspirateur'.")
    };
})

client.on("message", message => {
if(message.content.startsWith("mute")) {
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");

    if(message.mentions.users.size === 0) {
        return message.channel.send('Vous devez mentionner un utilisateur !');
    }

    var mute = message.guild.member(message.mentions.users.first());
    if(!mute) {
        return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
    }
    message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
        message.channel.send(`${mute.user.username} est mute !`);
    });
}

if(message.content.startsWith("unmute")) {
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");

    if(message.mentions.users.size === 0) {
        return message.channel.send('Vous devez mentionner un utilisateur !');
    }

    var mute = message.guild.member(message.mentions.users.first());
    if(!mute) {
        return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
    }
       message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
        message.channel.send(`${mute.user.username} n'est plus mute !`);
    });
}},)

client.on("message", message => {
    if(message.content === "C'est qui le mec de Talia ?") {
        message.channel.send("Le bg Darkrai X !");
        message.delete;
        console.log("Un utilisateur (" + message.author.username +") a démandé qui est le mec à Talia.")
    };
})

client.on("message", message => {
    if(message.content === "C'est qui la meilleur ?") {
        message.channel.send(":point_right: C’est `Ŧãℓiα ｡◕‿◕ღ` la meilleur, tout le monde le sait ! :point_left:\nC’est quand même elle la reine ! :crown:")
        console.log("Un utilisateur (" + message.author.username +") a demandé qui étais le meilleur.")
    }
})

client.on("message", message => {
    if(message.content === "Tu en pense quoi, GamerBot ?") {
        message.channel.send("Je confirme ! Ce channel c'est chelou...")
        console.log("Un utilisateur (" + message.author.username +") a demandé ce que jen pensais.")
    }
})

client.on("message", message => {
    if(message.content === "Va te cacher, GamerBot !") {
        message.channel.send("Non mais...")
        console.log("Un utilisateur (" + message.author.username +") a demandé ce que jen pensais.")
    }
})

client.on("message", message => {
    if(message.content === "Tu file des headshoot !") {
        message.channel.send("Toujours en noscope...");
        console.log("Un utilisateur (" + message.author.username +") a dis 'Tu file des headshoot !'.")
    }
})

client.on("message", message => {
    if(message.content === "Discord de Talia") {
        message.channel.send("Son discord : https://discord.gg/XeRxtQh");
        console.log("Un utilisateur (" + message.author.username +") a demandé le discord de Talia.")
    }
})

client.on("message", message => {
    if(message.content === "Discord de Dovakid") {
        message.channel.send("Son discord : https://discord.gg/U3DhvdN");
        console.log("Un utilisateur (" + message.author.username +") a demandé le discord de Dovakid.")
    }
})
client.on("message", message => {
    if (message.content.startsWith("PrincipaleBot,")) {
    
    var args = message.content.split(' ').join(' ').slice(14);
    const réponse = JSON.parse(fs.readFileSync('eightball.json', "utf8"));
    
    if(!args) return message.channel.send("Tu dois me poser une question !")
    
    var ball_embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField('Question :', `${args}`)
    .addField('Réponse', réponse[Math.round(Math.random() * réponse.length)])
    .setFooter("Demandé par " + message.author.username + " - PrincipaleBot")
    message.channel.send(ball_embed);
    }})

    

    client.on("message", message => {
        if(message.content === "Dis bonjour, PrincipaleBot.") {
            message.channel.send("Bonjour, ☠Obscur Mystery☠ !");
            console.log("Un utilisateur (" + message.author.username +") a demandé le discord de Dovakid.")
        }
    })    

    client.on("message", message => {
        if(message.content === "bruh") {
            message.channel.send("Ché :smiling_imp: !");
            console.log("Un utilisateur (" + message.author.username +") a dis 'bruh'.")
        }
    })

    client.on("error", error => {
        console.log("Une erreur s'est prdouite : \n")
        console.log(error);
        return;
    })

    client.on("message", message => {
        if(message.content === " ") {
            message.channel.send("");
            console.log("Un utilisateur (" + message.author.username + ") a dit " + message.content + ".")
        }})

        client.on("message", message => {
            if(message.content === " ") {
                message.channel.send("");
                console.log("Un utilisateur (" + message.author.username + ") a dit " + message.content + ".")
            }})
