(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{855:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.messages=r.locale=r.areTranslationsLoaded=void 0;var t,n=a(7),i=a(882),o=(t=i)&&t.__esModule?t:{default:t};(0,n.addLocaleData)(o.default);r.areTranslationsLoaded=!0,r.locale="sv",r.messages={"Terra.AbstractModal.BeginModalDialog":"Börja modal dialog","Terra.AbstractModal.EndModalDialog":"Avsluta modal dialog","Terra.actionHeader.back":"Tillbaka","Terra.actionHeader.close":"Stäng","Terra.actionHeader.maximize":"Maximera","Terra.actionHeader.minimize":"Minimera","Terra.actionHeader.next":"Nästa","Terra.actionHeader.previous":"Föregående","Terra.ajax.error":"Innehållet lästes inte in.","Terra.alert.advisory":"Rådgivning.","Terra.alert.alert":"Avisering.","Terra.alert.dismiss":"Ignorera","Terra.alert.error":"Fel.","Terra.alert.info":"Information.","Terra.alert.success":"Klar.","Terra.alert.unsatisfied":"Nödvändig åtgärd krävs.","Terra.alert.unverified":"Externa journaler.","Terra.alert.warning":"Varning!","Terra.applicationNavigation.drawerMenu.navigation":"Navigeringsobjekt","Terra.applicationNavigation.drawerMenu.utilities":"Verktygsobjekt","Terra.applicationNavigation.extensions.rollupButtonDescription":"Additional Tools","Terra.applicationNavigation.extensions.rollupMenuHeaderTitle":"Additional Tools","Terra.applicationNavigation.header.menuButtonTitle":"Meny","Terra.applicationNavigation.header.skipToContentTitle":"Gå till Innehåll","Terra.applicationNavigation.header.utilityButtonTitleNoUser":"Alternativ","Terra.applicationNavigation.header.utilityButtonTitleUser":"Användarinställningar","Terra.applicationNavigation.notifications.new":"Nytt","Terra.applicationNavigation.tabs.rollupButtonDescription":"Fler navigeringslänkar","Terra.applicationNavigation.tabs.rollupButtonTitle":"Mer","Terra.applicationNavigation.tabs.rollupMenuHeaderTitle":"Fler navigeringslänkar","Terra.applicationNavigation.utilityMenu.headerTitle":"Verktyg","Terra.applicationNavigation.utilityMenu.help":"Hjälp","Terra.applicationNavigation.utilityMenu.logout":"Utloggning","Terra.applicationNavigation.utilityMenu.settings":"Inställningar","Terra.collapsibleMenuView.more":"Mer","Terra.demographicsBanner.dateOfBirth":"Födelsedatum","Terra.demographicsBanner.dateOfBirthFullText":"Födelsedatum","Terra.demographicsBanner.deceased":"Avliden","Terra.demographicsBanner.gestationalAge":"GA","Terra.demographicsBanner.gestationalAgeFullText":"Graviditetstid","Terra.demographicsBanner.noDataProvided":"--","Terra.demographicsBanner.postMenstrualAge":"PMA","Terra.demographicsBanner.postMenstrualAgeFullText":"Tid enligt senaste mens","Terra.devSite.themed.help":"Hjälp","Terra.form.field.optional":"(valfri)","Terra.form.field.required":"Obligatorisk","Terra.form.select.add":'Lägg till "{text}"',"Terra.form.select.ariaLabel":"Sök","Terra.form.select.clearSelect":"Ta bort markering","Terra.form.select.defaultDisplay":"- Välj -","Terra.form.select.defaultUsageGuidance":"Använd upp- och nedpilarna för att navigera mellan alternativen. Tryck på Enter för att väklja ett alternativ.","Terra.form.select.dimmed":"Inaktiverad.","Terra.form.select.disabled":"Inaktiverad.","Terra.form.select.listOfTotalOptions":"Lista med {total} alternativ.","Terra.form.select.maxSelectionHelp":"Begränsa {text} antal poster.","Terra.form.select.maxSelectionOption":"Max antal poster {text} är valda","Terra.form.select.menu":"Meny","Terra.form.select.mobileButtonUsageGuidance":"Tryck för att navigera till alternativen.","Terra.form.select.mobileUsageGuidance":"Bläddra åt höger för att navigera till alternativen.","Terra.form.select.multiSelectUsageGuidance":"Ange text eller använd upp- och nedpilarna för att navigera genom alternativen. Tryck på Enter för att markera eller avmarkera ett alternativ.","Terra.form.select.noResults":'Inga matchande resultat för "{text}"',"Terra.form.select.optGroup":"Grupp {text}","Terra.form.select.option":"Alternativ","Terra.form.select.searchUsageGuidance":"Ange text eller använd upp- och nedpilarna för att navigera genom alternativen. Tryck på Enter för att välja ett alternativ.","Terra.form.select.selectCleared":"Välj omarkerat värde","Terra.form.select.selected":"Vald.","Terra.form.select.selectedText":"{text} vald.","Terra.form.select.unselected":"Omarkerad.","Terra.form.select.unselectedText":"{text} avmarkerad.","Terra.icon.IconConsultInstructionsForUse.title":"Indikator för elektroniska bruksanvisningar (eIFU)","Terra.InfiniteList.loading":"Läser in ...","Terra.menu.back":"Tillbaka","Terra.menu.close":"Stäng","Terra.notification.dialog.alert":"Avisering","Terra.notification.dialog.error":"Fel","Terra.notification.dialog.info":"Information","Terra.notification.dialog.success":"Klar","Terra.notification.dialog.warning":"Varning","Terra.Overlay.loading":"Läser in ...","Terra.popup.header.close":"Stäng","Terra.searchField.clear":"Rensa","Terra.searchField.search":"Sök","Terra.searchField.submit-search":"Sök","Terra.status-view.error":"Fel","Terra.status-view.no-data":"Inga resultat","Terra.status-view.no-matching-results":"Inga resultat matchar sökvillkoren","Terra.status-view.not-authorized":"Behörighet saknas","terraApplication.errorBoundary.defaultErrorMessage":"Ett fel uppstod: {errorDetails}","terraApplication.unsavedChangesPrompt.acceptButtonText":"Spara inte","terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro":"Det finns osparade ändringar i:","terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro":"Om du inte sparar ändringarna så försvinner de. Hur vill du fortsätta?","terraApplication.unsavedChangesPrompt.rejectButtonText":"Fortsätt redigera","terraApplication.unsavedChangesPrompt.singlePromptMessage":"Det finns osparade ändringar i {promptDescription}. Om du inte sparar ändringarna så försvinner de. Hur vill du fortsätta?","terraApplication.unsavedChangesPrompt.title":"Det finns osparade ändringar."}},882:function(e,r,a){e.exports=function(){"use strict";return[{locale:"sv",pluralRuleFunction:function(e,r){var a=String(e).split("."),t=!a[1],n=Number(a[0])==e,i=n&&a[0].slice(-1),o=n&&a[0].slice(-2);return r?1!=i&&2!=i||11==o||12==o?"other":"one":1==e&&t?"one":"other"},fields:{year:{displayName:"år",relative:{0:"i år",1:"nästa år","-1":"i fjol"},relativeTime:{future:{one:"om {0} år",other:"om {0} år"},past:{one:"för {0} år sedan",other:"för {0} år sedan"}}},"year-short":{displayName:"år",relative:{0:"i år",1:"nästa år","-1":"i fjol"},relativeTime:{future:{one:"om {0} år",other:"om {0} år"},past:{one:"för {0} år sen",other:"för {0} år sen"}}},month:{displayName:"månad",relative:{0:"denna månad",1:"nästa månad","-1":"förra månaden"},relativeTime:{future:{one:"om {0} månad",other:"om {0} månader"},past:{one:"för {0} månad sedan",other:"för {0} månader sedan"}}},"month-short":{displayName:"m",relative:{0:"denna mån.",1:"nästa mån.","-1":"förra mån."},relativeTime:{future:{one:"om {0} mån.",other:"om {0} mån."},past:{one:"för {0} mån. sen",other:"för {0} mån. sen"}}},day:{displayName:"dag",relative:{0:"i dag",1:"i morgon",2:"i övermorgon","-2":"i förrgår","-1":"i går"},relativeTime:{future:{one:"om {0} dag",other:"om {0} dagar"},past:{one:"för {0} dag sedan",other:"för {0} dagar sedan"}}},"day-short":{displayName:"dag",relative:{0:"i dag",1:"i morgon",2:"i övermorgon","-2":"i förrgår","-1":"i går"},relativeTime:{future:{one:"om {0} d",other:"om {0} d"},past:{one:"för {0} d sedan",other:"för {0} d sedan"}}},hour:{displayName:"timme",relative:{0:"denna timme"},relativeTime:{future:{one:"om {0} timme",other:"om {0} timmar"},past:{one:"för {0} timme sedan",other:"för {0} timmar sedan"}}},"hour-short":{displayName:"tim",relative:{0:"denna timme"},relativeTime:{future:{one:"om {0} tim",other:"om {0} tim"},past:{one:"för {0} tim sedan",other:"för {0} tim sedan"}}},minute:{displayName:"minut",relative:{0:"denna minut"},relativeTime:{future:{one:"om {0} minut",other:"om {0} minuter"},past:{one:"för {0} minut sedan",other:"för {0} minuter sedan"}}},"minute-short":{displayName:"min",relative:{0:"denna minut"},relativeTime:{future:{one:"om {0} min",other:"om {0} min"},past:{one:"för {0} min sen",other:"för {0} min sen"}}},second:{displayName:"sekund",relative:{0:"nu"},relativeTime:{future:{one:"om {0} sekund",other:"om {0} sekunder"},past:{one:"för {0} sekund sedan",other:"för {0} sekunder sedan"}}},"second-short":{displayName:"sek",relative:{0:"nu"},relativeTime:{future:{one:"om {0} sek",other:"om {0} sek"},past:{one:"för {0} s sen",other:"för {0} s sen"}}}}},{locale:"sv-AX",parentLocale:"sv"},{locale:"sv-FI",parentLocale:"sv"}]}()}}]);
//# sourceMappingURL=sv-translations-5f52478a3f768c8619ea.js.map