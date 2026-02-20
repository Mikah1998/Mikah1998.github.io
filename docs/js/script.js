/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets('music', {
    'map1': 'map.mp3',
	'map2': 'map2.mp3',
	'map3': 'map3.mp3',
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	'thud': 'thud.m4a',
	'whisp': 'whisp.m4a',
});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {
	'chocobar': 'chocobar.png',
	'egg': 'egg.png',
	'marshmallow': 'marshmallow.png',
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
    'yw': 'yokaiworld1.png',
	'yw2': 'yokaiworld2.png',
	'yw3': 'yokaiworld3.png',
	'yw4': 'yokaiworld4.png',
	'yw5': 'yokaiworld5png.png',
});


// Define the Characters
monogatari.characters ({
    'v': {
        name: 'Valentine',
        color: 'rgb(129, 12, 120)',
        directory: 'Valentine', 
        sprites: {
            normal: 'Valentine.png',
        }
    },

	'w': {
        name: 'Whistler',
        color: 'rgb(116, 141, 210)',
        directory: 'Whisper', 
        sprites: {
            normal: 'Whisper.png',
        }
    },

	'a': {
        name: 'Arachnus',
        color: 'rgb(182, 33, 60)',
        directory: 'Arachnus', 
        sprites: {
            normal: 'Arachnus.png',
        }
    },

	't': {
		name: 'Toadal Dude',
		color: 'rgb(87, 125, 73)',
        directory: 'Toadal', 
        sprites: {
            normal: 'Toadal.png',
        } 
	},

	'o': {
		name: 'Venoct',
		color: 'rgb(46, 136, 143)',
		directory: 'Venoct',
		sprites: {
			normal: 'Venoct.png',
		}
	},

	's': {
		name: 'Spoilerina',
		color: 'rgb(48, 90, 92)',
		directory: 'Spoilerina',
		sprites: {
			normal:'Spoilerina.png'
		}
	},

	'c': {
		name: 'Chocolina',
		color: 'rgb(101, 76, 66)',
		directory: 'Chocolina',
		sprites: {
			normal: 'Chocolina.png'
		}
	},

	'j': {
		name: 'Jibanyan',
		color: 'rgb(231, 77, 51)',
		directory: 'Jibanyan',
		sprites: {
			normal: 'Jibanyan.png'
		}
	},

	'h': {
		name: 'Eggcelency',
		color: 'rgb(157, 91, 77)',
		directory: 'HerEggcelency',
		sprites: {
			normal: 'Her.png'
		}
	},

	'wm': {
		name: 'Whismellowman',
		color: 'rgb(106, 132, 205)',
		directory: 'Whismellowman',
		sprites: {
			normal: 'Whismellowman.png'
		}
	},
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene #000000ff with fadeIn',
        'play sound whisp',
		'show character w normal at center with fadeIn',
		'w Good day everyone. I’m Whistler, your guide to these mysterious tales.',
		'w A sweet season that brightens up the cold days. Do you like chocolate?',
		'w However, this year’s chocolate from the Yo-kai World seems to taste like bitter resentment.',
		'w So, please enjoy one of these 100 Tales of Puni Puni this evening.',
		'hide character w with fadeOut',

		'centered ~Puni Puni 100 Tales: ~Operation White Day!~',

		'centered Yo-kai World (February 14th).',
        'play music map1 with loop once',
		'show scene yw with fadeIn',
		'show character v normal at center with fadeIn',
		'v Kyaha♪ I’ve got to give these chocolate gifts made with all my heart♡',

		'show scene yw with fadeIn',
		'Valentine headed to give out chocolate, but what was waiting for her there was…',
		'show character v normal at right with fadeIn',
		'v Kyaha♪ We finally meet, Arachnus♡',
		'show character a normal at left with fadeIn',
		'a Hm? You are…',
		'v Umm, nice to meet you! My name is Valentine~!',
		'a  I see, my name is Arachnus. Thank you for your continued support.',
		'v Hey Arachnus, what kind of chocolate do you like~?',
		'a Hmm… something that fills my mouth with sweetness would be nice. It’d be perfect for when you’re tired, too.',
		'v Oh my, you have quite the sweet tooth♡ I love the contrast!',
		'v Um… this… please take it if you’d like!',		
		'a Wow, that chocolate looks pretty sweet! I’m truly grateful.',
		'v Kyaha♪ I’m so glad you like it~!',
		'a Then let’s try exercising before meals to make ourselves hungrier.',

		'show scene yw2 with fadeIn',
		'After Arachnus, what caught Valentine’s eyes was…',
		'show character v normal at center with fadeIn',
		'v That’s Toadal Dude, rumored to be the stylish one surrounded by all those girls!',
		'v Hmm, at first glance he seems like a bit of a playboy, but…',
		'hide character v at right with slideOutRight',
		'Toadal Dude approached with a brisk step.',
		'show character t normal at left with fadeIn',
		't Hey! Is there something I can help you with? I’ve been watching you for a while now.',
		'show character v normal at right with fadeIn',
		'v Hey hey, what kind of chocolate do you like, Toadal Dude~?',
		't Oh, a survey! Okay, I’ll answer.',
		't I like bitter chocolate with a lot of cocoa! I don’t just want sweetness, I want to taste the real flavor of cocoa!',
		'v Swoon♡ Despite his looks, he’s got a mature taste… not bad♪ Umm… Toadal Dude! Please take this!',
		't Ooh, looks very bitter! Thanks! I’ll take it!',
		'v Kyaha, please savor every bite♪',
		't Might as well go for a run and eat it while you’re hungry!',
		'hide character t at left with fadeOut',

		'show scene yw2 with fadeIn',
		'With chocolate in hand, Valentine finds someone who catches her eye…',

		'show character v normal at center with fadeIn',
		'v Is that… the elite Yo-kai Venoct?',
		'hide character v at center with fadeOut',
		'show character o normal at right with fadeIn',
		'Venoct is eating chocolate together with the dragons on his scarf.',
		'show character v normal at left with fadeIn',
		'v No way… so cool~♡ but that’s not all… huh?',
		'Looking closely, she noticed that there is a cute piece of chocolate on Venoct’s mouth.',
		'v Aah! Shot through the heart~!',
		'v Wait… isn’t that cheating!? That’s, like, practically heart-stoppingly cute…!',
		'o …?',
		'Venoct notices that Valentine is acting strangely and looks at her suspiciously.',
		'v Um, um! Would you please take this chocolate?',
		'o Ah, yes. Thank you.',
		'v  Kyaa! And his voice is so smooth! That’s totally unfair!!',
		'hide character v at right with slideOutRight',
		'As Valentine runs off in a flurry of commotion, Venoct tilts his head.',
		'o What was that…? Anyway, it’s time for practice. Let’s get started…',

		'show scene yw2 with fadeIn',
		'show character t normal at left with fadeIn',
		'show character a normal at right with fadeIn',
		'show character o normal at center with fadeIn',
		'After working up a sweat from exercising, Venoct and the others happened to be there, and they decided to eat the chocolate they had received.',
		't Mmm! This bitterness and depth! This is what chocolate should be like!',
		'a The ultimate sweetness is that which melts in your mouth. To not grasp this truth…',
		't Just sweet? You’re such a child! Though it suits you perfectly!',
		'a What nonsense… it’s true what they say, those who know nothing of taste pretend to be connoisseurs.',
		't What!!? Hey Venoct, which side are you on!?',
		'o ...',
		'o Both are delicious.',
		'a Hmph, you’re the second-in-command of the Bony Spirits army! Shouldn’t you take my side?',
		'The fights between Arachnus and Toadal Dude continue as usual. Meanwhile, Venoct was enjoying the chocolate at his own pace.',

		'show scene #000000ff with fadeIn',
		'centered Yo-kai World (March 13th).',
		
        'stop music with fade 1',
		'play music map2 with loop once',
		'show scene yw3 with fadeIn',
		'One month later, the day before White Day. Venoct and the others were getting anxious.',
		'They hadn’t been able to buy the return gifts for the sweets.',
		'show character t normal at left with fadeIn',
		'show character o normal at center with fadeIn',
		'show character a normal at right with fadeIn',
		't Drat, Flash T. Cash didn’t need to buy up everything…',
		'o All the sweets have vanished from town… they’re sold out everywhere.',
		't I guess he’s doing it for White Day gifts too, but he’s taking it to extremes…',
		'a What should we do…? If this keeps up, we’ll end up empty-handed.',
		'o I feel sorry for the people who gifted me chocolate…',
		't Oh man, my reputation’s completely ruined! I’ve gotta find something!',
		'o Should we try to find someone who might be willing to give it to us…?',
		'a Yeah, I guess so.',
		't We don’t have much time, let’s hurry!',
		'hide character a at right with slideOutRight',
		'hide character t at right with slideOutRight',
		'hide character o at right with slideOutRight',

		'show scene yw3 with fadeIn',
		'show character s normal at right with fadeIn',
		's Spoiler! This year’s White Day will end in a rain of blood.',
		'show character c normal at center with fadeIn',
		'c Oh dear, spoilers are a bit too early-erina.',
		'show character t normal at left with fadeIn',
		't Huh? What on earth are you talking about?',
		's Did you receive a chocolate from Valentine?',
		's She is a Yo-kai born from the sadness and anger of those who didn’t receive White Day gifts-erina.',
		's So if you can’t prepare a heartfelt return gift…!',
		'c Oh my… why, this is absolutely terrible news!',
		't No way… I did.',
		'hide character t with fadeOut',
		'show character o normal at left',
		'o Me too…',
		'hide character o with fadeOut',
		'show character a normal at left',
		'a You too!? This is bad… we gotta hurry and get something to give back!',
		's Well, let me test your determination!',
		'c Half-hearted displays of affection won’t satisfy-erina!',

		'show scene yw3 with fadeIn',
		'show character t normal at left with fadeIn',
		't This is bad… there’s no candy left in town…',
		'show character a normal at right with fadeIn',
		'a If things continue like this, we’ll be at Valentine’s mercy…',
		'show character o normal at center with fadeIn',
		'o White Day is tomorrow…',
		't Anyway, we’ve got to do whatever it takes to get our hands on some sweets!',
		'a But wouldn’t something low-effort just make her angry?',
		'o That means we’d need something of quality…',
		'show scene #000000ff with fadeIn',
		'Thus began Operation White Day. Will the three of them be ready in time?',

		'show scene yw3 with fadeIn',
		'show character j normal at center with fadeIn',
		'j Yay, nyan…! The limited edition Chocobar Platinum…!',
		'j I was lucky enough to get a whole box, nyan! Extremely lucky, nyan!',
		'j Well, let’s get started, nyaaan~♪',
		'a Please wait a moment!',
		'j Nyanya!?',
		'show character o normal at right with fadeIn',
		'o Sorry, but could you… spare us some of that limited edition item…?',
		'j Huh!? What are you talking about, nyan? This is all mine, nyan!',
		'show character t normal at left with fadeIn',
		't Please! Our lives depend on it!',
		'j Lives!? What do you mean, nyan?',
		'o That’s…',
		'hide character j with fadeOut',
		'hide character t with fadeOut',
		'hide character o with fadeOut',
		'show scene #000000ff with fadeIn',
		'Venoct and the others explain their situation to Jibanyan.',
		'show scene yw3 with fadeIn',
		'show character j normal at center',
		'j That’s… certainly scary, nyan. Hmm, I get it, nyan! If you fight me and win, I’ll share it with you, nyan!',
		'show character a normal at left with fadeIn', 
		'a Thank you very much!',

		'show scene yw3 with fadeIn',
		'show character a normal at left with fadeIn',
		'a We’ve managed to get some Chocobars for ourselves, but…',
		'show character o normal at center with fadeIn',
		'o This won’t be enough…',
		'show character t normal at right with fadeIn',
		't Hey, look over there!',
		'hide character a with fadeOut',
		'hide character t with fadeOut',
		'hide character o with fadeOut',
		'show character h normal at center with fadeIn',
		'There was an egg-like figure holding a lot of egg-shaped chocolates.',
		'h Alright, now my chocolate return gifts are perfect! I’ll call them Choco Eggs!',
		'show character t normal at left with fadeIn',
		't Wow, that looks delicious! Hey, is that homemade?',
		'h Of course! I poured my heart into it!',
		't Gotcha! Hey, give us some of that!',
		'show character a normal at right with fadeIn',
		'a Can’t you save us from this predicament?',
		'h …It seems something’s going on.',
		'show scene #000000ff with fadeIn',
		'When they explained the situation to Her Eggcelency, she looked visibly shocked.',
		'show scene yw3 with fadeIn',
		'show character h normal at center',
		'show character a normal at right with fadeIn',
		'show character t normal at left with fadeIn',
		'h First of all, why didn’t you prepare it earlier?',
		't Umm, well…',
		'h I think you are overconfident for thinking it’d just be okay to get away barely scraping by.',
		'h Hmph… face me. If you win, I’ll share it with you.',
		't That’s a relief…! Then we’ll take you up on it.',

		'show scene yw3 with fadeIn',
		'show character o normal at center with fadeIn',
		'o Chocobars and egg-shaped chocolates… that doesn’t sound very promising.',
		'show character t normal at left with fadeIn',
		't Hey, look over there! They’re selling marshmallows!',
		'show character a normal at right with fadeIn',
		'a A mobile vendor! So it wasn’t hoarded after all!',
		'hide character a at left with slideOutLeft',
		'hide character t at left with slideOutLeft',
		'hide character o at left with slideOutLeft',
		'The three of them quickly rush over to the mobile marshmallow vendor.',

		'show scene yw4 with fadeIn',
		'show character wm normal at center with fadeIn',
		'wm Whiskoi! The elusive, ultra-rare marshmallow shop! Opening now, whis~!', 
		'wm By the way, it’s not Magic Marshmallows, just regular sweets, whis~.',
		'show character t normal at left with fadeIn',
		't And they’re rare! Please let us buy some!',
		'wm Our store has a system where we only sell to those who win battles, whis!',
		't Huh!? The heck kinda system is that!?',
		'show character o normal at right with fadeIn',
		'o Desperate times call for desperate measures… we must fight.',

		'show scene yw4 with fadeIn',
		'show character wm normal at center with fadeIn',
		'wm Whis whis whis… well done, whis~! Well, thank you for your purchase, whis~!',
		'hide character wm at center with fadeOut',
		'show character t normal at left with fadeIn',
		't Yeah! Is this enough to give back?',
		'show character a normal at right with fadeIn',
		'a I was a bit scared for a moment, but now I can face tomorrow with peace of mind.',
		'show character o normal at center with fadeIn',
		'o Tomorrow, let’s go give these gifts back to those who gave us chocolate…',

		'show scene #000000ff with fadeIn',
		'centered Yo-kai World (March 14th).',

        'stop music with fade 1',
		'play music map3 with loop once',
		'show scene yw with fadeIn',
		'The three of them had finished giving gifts in return to everyone who had given them chocolate.',
		'show character o normal at center with fadeIn',
		'o The only one left is Valentine…',
		'show character s normal at right with fadeIn',
		's Are you ready to give her a gift in return?',
		'show character t normal at left with fadeIn',
		't Yep, got it!',
		'hide character s at right with fadeOut',
		'show character c normal at right with fadeIn',
		'c Looks like you underestimated a bit-erina.',
		'hide character o at center with fadeOut',
		'show character a normal at center with fadeIn',
		'a What do you mean?',
		't You’re worrying too much! Okay, let’s go and give it to her already!',

		'show scene yw5 with fadeIn',
		'The three found Valentine and gave her their White Day gifts.',
		'show character a normal at left with fadeIn',
		'a This is a Chocobar Platinum. It’s a rare Chocobar.',
		'show character t normal at right with fadeIn',
		't These are handmade chocolate eggs! See how much love I put into them?',
		'hide character a at left with fadeOut',
		'show character o normal at left with fadeIn',
		'o These marshmallows aren’t commonly available. I hope you like them…',
		'show character v normal at center with fadeIn',
		'v  Kyaa♪ So many! I’m super happy~♡',
		'v ...not.',
		'o (Gulp, her expression changed…)',
		'v  Hey, are these really made with love~?',
		't Oh, of course! It’s absolutely packed!',
		'hide character t at right with fadeOut',
		'show character a normal at right with fadeIn',
		'a I got them while thinking of you.',
		'o I got them despite the hardships…',
		'v Hmm...',
		'v Things like something that someone else worked hard to get,',
		'v or something handmade by someone else,',
		'v or even just something rare that you happened to stumble upon...',
		'v You wouldn’t gift me things like that, right?',
		'hide character o at left with fadeOut',
		'show character t normal at left with fadeIn',
		't Th-th-that’s…',
		'hide character v at center with fadeOut',
		'show character o normal at center with fadeIn',
		'Cold sweat began to pour down all over the three of them.',
		'hide character o at center with fadeOut',
		'hide character a at right with fadeOut',
		'hide character t at left with fadeOut',
		'show character v normal at center with fadeIn',
		'v Wouldn’t it be better to receive nothing at all than to receive something mediocre? This calls for some punishment... right?',
		'hide character v at center with fadeOut',
		'show character o normal at center with fadeIn',
		'show character a normal at left with fadeIn',
		'show character t normal at right with fadeIn',
		'o ...Let’s just accept it.',
		'a Darn, no room for excuses!',

		'show scene yw5 with fadeIn',
		'Venoct and co. were left breathless from the brutal punishments they received.',
		'show character a normal at left with fadeIn',
		'a Wouldn’t it have been better to just… apologize honestly?',
		'show character t normal at right with fadeIn',
		't I-I’ll treasure… Valentine’s chocolates… more starting next year…',
		'show character o normal at center with fadeIn',
		'o Same...',
		'The three of them muttered weakly and collapsed.',
        'play sound thud',
		'hide character o at center with slideOutDown',
		'hide character a at left with slideOutDown',
		'hide character t at right with slideOutDown',
		'show character v normal at center with fadeIn',
		'v Kyaha, I’m so glad you understand~!',
		'v Valentine’s Day is an important day for giving with all your heart!',
		'v Everyone needs to think about the other person and put their heart into it properly... or I’ll come and punish you myself...',
		'v (seriously).',
		'hide character v at center with fadeOut',
		'Valentine departs, leaving behind the eerie words "May everyone enjoy both Valentine’s Day and White Day..." as she goes along...',
        'stop music with fade 3',

		'show scene #000000ff with fadeIn',
		'show scene #000000ff with fadeIn',
		'centered The End...',
		'end',
	],
});