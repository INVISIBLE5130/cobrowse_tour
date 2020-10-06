window.addEventListener("load", () => {
    if (localStorage.getItem('tour') === 'finished') {
        return null
    } else {
        if (window.innerWidth < 1023) {
            document.querySelector("body").classList.add('menu-active')
            document.querySelector('.tour_hide').classList.add('tour_show')
        } else {
            document.querySelector('.tour_hide').classList.add('tour_show')
        }
    }
})

function startTour() {
    if (window.innerWidth < 1023) {
        document.querySelector("body").classList.add('menu-active')
        document.querySelector('.tour_hide').classList.add('tour_show')
    } else {
        document.querySelector('.tour_hide').classList.add('tour_show')
    }
}

function finishTour() {
    document.querySelector('.tour_hide').classList.remove('tour_show')
    document.querySelector('.user-option-slide').style.position = 'fixed'
    document.querySelector('.user-option-slide').style.bottom = '0'
    document.querySelector('.user-option-slide').style.zIndex = '90'
    document.querySelector('.user-header').style.position = 'relative'
    localStorage.setItem('tour', 'finished')
}

let screen = 0

function backScreen() {
    screen -= 1

    switch (screen) {
        case 1:
            document.querySelector('.tour_window-title').innerHTML = 'Chat'
            document.querySelector('.tour_window-description').innerHTML = 'Clicking on this button you could open ' +
                ' the chat and texting with other participants of this session.'
            document.querySelector('.menu').children[0].style.zIndex = '1001'
            document.querySelector('.menu').children[0].style.backgroundColor = 'white'
            document.querySelector('.menu').children[1].style.zIndex = 'unset'
            document.querySelector('.menu').children[1].style.backgroundColor = 'unset'
            document.querySelector('.back').style.display = 'none'
            break;
        case 2:
            document.querySelector('.tour_window-title').innerHTML = 'Users'
            document.querySelector('.tour_window-description').innerHTML = 'Clicking on this button you could make' +
                ' a conference, broadcast or private call.'
            document.querySelector('.menu').children[0].style.zIndex = 'unset'
            document.querySelector('.menu').children[0].style.backgroundColor = 'unset'
            document.querySelector('.menu').children[1].style.zIndex = '1001'
            document.querySelector('.menu').children[1].style.backgroundColor = 'white'
            document.querySelector('.menu').children[2].style.zIndex = 'unset'
            document.querySelector('.menu').children[2].style.backgroundColor = 'unset'
            break;
        case 3:
            document.querySelector('.tour_window-title').innerHTML = 'Settings'
            document.querySelector('.tour_window-description').innerHTML = 'Clicking on this button you could set' +
                ' or change your username, change audio device and toggle simulation "Mobile / Desktop".'
            document.querySelector('.menu').children[1].style.zIndex = 'unset'
            document.querySelector('.menu').children[1].style.backgroundColor = 'unset'
            document.querySelector('.menu').children[2].style.zIndex = '1001'
            document.querySelector('.menu').children[2].style.backgroundColor = 'white'
            document.querySelector('.menu').children[3].style.zIndex = 'unset'
            document.querySelector('.menu').children[3].style.backgroundColor = 'unset'
            break;
        case 4:
            document.querySelector('.tour_window-title').innerHTML = 'Share Link'
            document.querySelector('.tour_window-description').innerHTML = 'Clicking on this button you could copy' +
                ' the url and share it with other people.'
            document.querySelector('.menu').children[2].style.zIndex = 'unset'
            document.querySelector('.menu').children[2].style.backgroundColor = 'unset'
            document.querySelector('.menu').children[3].style.zIndex = '1001'
            document.querySelector('.menu').children[3].style.backgroundColor = 'white'
            document.querySelector('.menu').children[4].style.zIndex = 'unset'
            document.querySelector('.menu').children[4].style.backgroundColor = 'unset'

            if (window.innerWidth < 1023) {
                document.querySelector('.next').style.display = 'unset'
            }
            break;
        case 5:
            document.querySelector('.tour_window-title').innerHTML = 'New URL'
            document.querySelector('.tour_window-description').innerHTML = 'Clicking on this button you could type' +
                ' a new url and change the presentation web page.'
            document.querySelector('.menu').children[3].style.zIndex = 'unset'
            document.querySelector('.menu').children[3].style.backgroundColor = 'unset'
            document.querySelector('.menu').children[4].style.zIndex = '1001'
            document.querySelector('.menu').children[4].style.backgroundColor = 'white'
            document.querySelector('.menu-icon').style.zIndex = 'unset'
            document.querySelector('.menu-icon').style.backgroundColor = 'unset'
            break;
        case 6:
            document.querySelector('.tour_window-title').innerHTML = 'Tour button'
            document.querySelector('.tour_window-description').innerHTML = 'Clicking on this button you could start' +
                ' this tour again.'
            document.querySelector('.menu').children[4].style.zIndex = 'unset'
            document.querySelector('.menu').children[4].style.backgroundColor = 'unset'
            document.querySelector('.menu-icon').style.zIndex = '1001'
            document.querySelector('.menu-icon').style.backgroundColor = 'white'
            document.querySelector('.user-option-list').children[0].style.zIndex = 'unset'
            document.querySelector('.user-option-list').children[0].style.backgroundColor = 'unset'
            break;
        case 7:
            document.querySelector('.user-option-slide').style.position = 'absolute'
            document.querySelector('.user-option-slide').style.bottom = 'unset'
            document.querySelector('.user-option-slide').style.zIndex = 'unset'

            document.querySelector('.tour_window-title').innerHTML = 'Minus scope'
            document.querySelector('.tour_window-description').innerHTML = 'Clicking on this button you could change' +
                ' scope to minus.'
            document.querySelector('.menu-icon').style.zIndex = 'unset'
            document.querySelector('.menu-icon').style.backgroundColor = 'unset'
            document.querySelector('.user-option-list').children[0].style.zIndex = '1001'
            document.querySelector('.user-option-list').children[0].style.backgroundColor = 'white'
            document.querySelector('.user-option-list').children[1].style.zIndex = 'unset'
            document.querySelector('.user-option-list').children[1].style.backgroundColor = 'unset'
            break;
        case 8:
            document.querySelector('.user-option-slide').style.position = 'absolute'
            document.querySelector('.user-option-slide').style.bottom = 'unset'
            document.querySelector('.user-option-slide').style.zIndex = 'unset'

            document.querySelector('.tour_window-title').innerHTML = 'Plus scope'
            document.querySelector('.tour_window-description').innerHTML = 'Clicking on this button you could change' +
                ' scope to plus.'
            document.querySelector('.user-option-list').children[0].style.zIndex = 'unset'
            document.querySelector('.user-option-list').children[0].style.backgroundColor = 'unset'
            document.querySelector('.user-option-list').children[1].style.zIndex = '1001'
            document.querySelector('.user-option-list').children[1].style.backgroundColor = 'white'
            document.querySelector('.user-option-list').children[2].style.zIndex = 'unset'
            document.querySelector('.user-option-list').children[2].style.backgroundColor = 'unset'
            break;
        case 9:
            document.querySelector('.user-option-slide').style.position = 'absolute'
            document.querySelector('.user-option-slide').style.bottom = 'unset'
            document.querySelector('.user-option-slide').style.zIndex = 'unset'

            document.querySelector('.tour_window-title').innerHTML = 'Pencil'
            document.querySelector('.tour_window-description').innerHTML = 'Clicking on this button you could draw' +
                ' anything over the screen or if you use tool on mobile device you could touch and hold your screen to activate it.'
            document.querySelector('.user-option-list').children[1].style.zIndex = 'unset'
            document.querySelector('.user-option-list').children[1].style.backgroundColor = 'unset'
            document.querySelector('.user-option-list').children[2].style.zIndex = '1001'
            document.querySelector('.user-option-list').children[2].style.backgroundColor = 'white'
            document.querySelector('.user-option-list').children[3].style.zIndex = 'unset'
            document.querySelector('.user-option-list').children[3].style.backgroundColor = 'unset'
            break;
        case 10:
            document.querySelector('.user-option-slide').style.position = 'absolute'
            document.querySelector('.user-option-slide').style.bottom = 'unset'
            document.querySelector('.user-option-slide').style.zIndex = 'unset'

            document.querySelector('.tour_window-title').innerHTML = 'Drag'
            document.querySelector('.tour_window-description').innerHTML = 'Clicking on this button you could move' +
                ' the screen of presentation page.'
            document.querySelector('.user-option-list').children[2].style.zIndex = 'unset'
            document.querySelector('.user-option-list').children[2].style.backgroundColor = 'unset'
            document.querySelector('.user-option-list').children[3].style.zIndex = '1001'
            document.querySelector('.user-option-list').children[3].style.backgroundColor = 'white'
            document.querySelector('.user-option-list').children[4].style.zIndex = 'unset'
            document.querySelector('.user-option-list').children[4].style.backgroundColor = 'unset'

            document.querySelector('.next').style.display = 'unset'
            break;
        case 11:
            document.querySelector('.user-option-slide').style.position = 'absolute'
            document.querySelector('.user-option-slide').style.bottom = 'unset'
            document.querySelector('.user-option-slide').style.zIndex = 'unset'

            document.querySelector('.tour_window-title').innerHTML = 'File'
            document.querySelector('.tour_window-description').innerHTML = 'Clicking on this button you could ' +
                ' drag & drop your files to the presentation and show it.'
            document.querySelector('.user-option-list').children[3].style.zIndex = 'unset'
            document.querySelector('.user-option-list').children[3].style.backgroundColor = 'unset'
            document.querySelector('.user-option-list').children[4].style.zIndex = '1001'
            document.querySelector('.user-option-list').children[4].style.backgroundColor = 'white'
            break;
    }
}

function nextScreen() {
    screen += 1

    switch (screen) {
        case 1:
            if (window.innerWidth < 1023)
            document.querySelector('.user-header').style.position = 'absolute'
            document.querySelector('.user-header').style.zIndex = 'unset'
            document.querySelector('.tour_window-title').innerHTML = 'Chat'
            document.querySelector('.tour_window-description').innerHTML = 'Clicking on this button you could open ' +
                ' the chat and texting with other participants of this session.'
            document.querySelector('.menu').children[0].style.zIndex = '1001'
            document.querySelector('.menu').children[0].style.backgroundColor = 'white'
            break;
        case 2:
            document.querySelector('.tour_window-title').innerHTML = 'Users'
            document.querySelector('.tour_window-description').innerHTML = 'Clicking on this button you could make' +
                ' a conference, broadcast or private call.'
            document.querySelector('.menu').children[0].style.zIndex = 'unset'
            document.querySelector('.menu').children[0].style.backgroundColor = 'unset'
            document.querySelector('.menu').children[1].style.zIndex = '1001'
            document.querySelector('.menu').children[1].style.backgroundColor = 'white'
            document.querySelector('.back').style.display = 'unset'
            break;
        case 3:
            document.querySelector('.tour_window-title').innerHTML = 'Settings'
            document.querySelector('.tour_window-description').innerHTML = 'Clicking on this button you could set' +
                ' or change your username, change audio device and toggle simulation "Mobile / Desktop".'
            document.querySelector('.menu').children[1].style.zIndex = 'unset'
            document.querySelector('.menu').children[1].style.backgroundColor = 'unset'
            document.querySelector('.menu').children[2].style.zIndex = '1001'
            document.querySelector('.menu').children[2].style.backgroundColor = 'white'
            break;
        case 4:
            document.querySelector('.tour_window-title').innerHTML = 'Share Link'
            document.querySelector('.tour_window-description').innerHTML = 'Clicking on this button you could copy' +
                ' the url and share it with other people.'
            document.querySelector('.menu').children[2].style.zIndex = 'unset'
            document.querySelector('.menu').children[2].style.backgroundColor = 'unset'
            document.querySelector('.menu').children[3].style.zIndex = '1001'
            document.querySelector('.menu').children[3].style.backgroundColor = 'white'
            break;
        case 5:
            document.querySelector('.tour_window-title').innerHTML = 'New URL'
            document.querySelector('.tour_window-description').innerHTML = 'Clicking on this button you could type' +
                ' a new url and change the presentation web page.'
            document.querySelector('.menu').children[3].style.zIndex = 'unset'
            document.querySelector('.menu').children[3].style.backgroundColor = 'unset'
            document.querySelector('.menu').children[4].style.zIndex = '1001'
            document.querySelector('.menu').children[4].style.backgroundColor = 'white'
            if (window.innerWidth < '1023') {
                document.querySelector('.next').style.display = 'none'
            }
            break;
        case 6:
            document.querySelector('.tour_window-title').innerHTML = 'Tour button'
            document.querySelector('.tour_window-description').innerHTML = 'Clicking on this button you could start' +
                ' this tour again.'
            document.querySelector('.menu').children[4].style.zIndex = 'unset'
            document.querySelector('.menu').children[4].style.backgroundColor = 'unset'
            document.querySelector('.menu-icon').style.zIndex = '1001'
            document.querySelector('.menu-icon').style.backgroundColor = 'white'
            break;
        case 7:
            document.querySelector('.user-option-slide').style.position = 'absolute'
            document.querySelector('.user-option-slide').style.bottom = 'unset'
            document.querySelector('.user-option-slide').style.zIndex = 'unset'

            document.querySelector('.tour_window-title').innerHTML = 'Minus scope'
            document.querySelector('.tour_window-description').innerHTML = 'Clicking on this button you could change' +
                ' scope to minus.'
            document.querySelector('.menu-icon').style.zIndex = 'unset'
            document.querySelector('.menu-icon').style.backgroundColor = 'unset'
            document.querySelector('.user-option-list').children[0].style.zIndex = '1001'
            document.querySelector('.user-option-list').children[0].style.backgroundColor = 'white'
            break;
        case 8:
            document.querySelector('.user-option-slide').style.position = 'absolute'
            document.querySelector('.user-option-slide').style.bottom = 'unset'
            document.querySelector('.user-option-slide').style.zIndex = 'unset'

            document.querySelector('.tour_window-title').innerHTML = 'Plus scope'
            document.querySelector('.tour_window-description').innerHTML = 'Clicking on this button you could change' +
                ' scope to plus.'
            document.querySelector('.user-option-list').children[0].style.zIndex = 'unset'
            document.querySelector('.user-option-list').children[0].style.backgroundColor = 'unset'
            document.querySelector('.user-option-list').children[1].style.zIndex = '1001'
            document.querySelector('.user-option-list').children[1].style.backgroundColor = 'white'
            break;
        case 9:
            document.querySelector('.user-option-slide').style.position = 'absolute'
            document.querySelector('.user-option-slide').style.bottom = 'unset'
            document.querySelector('.user-option-slide').style.zIndex = 'unset'

            document.querySelector('.tour_window-title').innerHTML = 'Pencil'
            document.querySelector('.tour_window-description').innerHTML = 'Clicking on this button you could draw' +
                ' anything over the screen or if you use tool on mobile device you could touch and hold your screen to activate it.'
            document.querySelector('.user-option-list').children[1].style.zIndex = 'unset'
            document.querySelector('.user-option-list').children[1].style.backgroundColor = 'unset'
            document.querySelector('.user-option-list').children[2].style.zIndex = '1001'
            document.querySelector('.user-option-list').children[2].style.backgroundColor = 'white'
            break;
        case 10:
            document.querySelector('.user-option-slide').style.position = 'absolute'
            document.querySelector('.user-option-slide').style.bottom = 'unset'
            document.querySelector('.user-option-slide').style.zIndex = 'unset'

            document.querySelector('.tour_window-title').innerHTML = 'Drag'
            document.querySelector('.tour_window-description').innerHTML = 'Clicking on this button you could move' +
                ' the screen of presentation page.'
            document.querySelector('.user-option-list').children[2].style.zIndex = 'unset'
            document.querySelector('.user-option-list').children[2].style.backgroundColor = 'unset'
            document.querySelector('.user-option-list').children[3].style.zIndex = '1001'
            document.querySelector('.user-option-list').children[3].style.backgroundColor = 'white'
            break;
        case 11:
            document.querySelector('.user-option-slide').style.position = 'absolute'
            document.querySelector('.user-option-slide').style.bottom = 'unset'
            document.querySelector('.user-option-slide').style.zIndex = 'unset'

            document.querySelector('.tour_window-title').innerHTML = 'File'
            document.querySelector('.tour_window-description').innerHTML = 'Clicking on this button you could ' +
                ' drag & drop your files to the presentation and show it.'
            document.querySelector('.user-option-list').children[3].style.zIndex = 'unset'
            document.querySelector('.user-option-list').children[3].style.backgroundColor = 'unset'
            document.querySelector('.user-option-list').children[4].style.zIndex = '1001'
            document.querySelector('.user-option-list').children[4].style.backgroundColor = 'white'

            document.querySelector('.next').style.display = 'none'
            break;
    }
}