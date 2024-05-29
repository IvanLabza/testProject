import{c as J,a as m,b as K,i as p,d as e,e as V}from"./assets/vendor-ec538632.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();const f=document.querySelector(".total"),g=document.querySelector(".today");let d=197632,h=384911738;const l=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),y=100,Q=400,S=7,X=6e3/S;f.textContent=l.format(h);g.textContent=l.format(d);setInterval(()=>{const s=Math.floor(Math.random()*(Q-y+1))+y;for(let a=0;a<S;a++)setTimeout(()=>{h+=s,d+=s,f.textContent=l.format(Math.floor(h)),g.textContent=l.format(Math.floor(d))},a*X)},6e3);const N=document.querySelector(".userName"),T=document.querySelector(".userLastName"),v=document.querySelector(".input-phone"),A=document.querySelector(".email"),b=document.querySelector(".checkbox"),_=document.querySelector(".form-list"),E=J().shape({userName:m().min(3,"min 3 later").max(40,"max 40 later").matches(/^[A-Za-z]+$/,"only later").required("required name"),userLastName:m().min(3,"min 3 later").max(40,"max 40 later").matches(/^[A-Za-z]+$/,"only later").required("required last name"),phone:m().matches(/^\d{7,10}$/,"min 7 max 10 numbers").required("required phone"),email:m().email("error format email").required("required"),checkbox:K().oneOf([!0],"Checkbox must be checked").required("required")});let o={userName:N.value,userLastName:T.value,phone:v.value,email:A.value,checkbox:b.checked};const u=(t,s)=>{if(s==="")p.error({title:"error",message:"required input field",position:"topCenter"});else{let a={};a[t]=s,E.validateAt(t,a).then(()=>{}).catch(i=>{p.error({title:"error",message:i.errors[0],position:"topCenter"})})}};b.addEventListener("change",t=>{o.checkbox=t.target.checked,u("checkbox",o.checkbox)});N.addEventListener("blur",t=>{o.userName=t.target.value,u("userName",o.userName)});T.addEventListener("blur",t=>{o.userLastName=t.target.value,u("userLastName",o.userLastName)});v.addEventListener("blur",t=>{o.phone=t.target.value,u("phone",o.phone)});A.addEventListener("blur",t=>{o.email=t.target.value,u("email",o.email)});_.addEventListener("submit",t=>{t.preventDefault(),E.validate(o),localStorage.setItem("person",JSON.stringify(o))});const ee={joinNow:"DOŁĄCZ TERAZ! ZAREJESTRUJ SIĘ W SYSTEMIE NATYCHMIAST, ABY ZABEZPIECZYĆ SWOJE MIEJSCE!",discover:"Odkryj ścieżkę do finansowego dobrobytu!",fullName:"Pełne imię",lastName:"Nazwisko",emailAddress:"Adres e-mail",phoneNumber:"Numer telefonu",signUp:"ZAPISZ SIĘ",byRegistering:"Rejestrując się, potwierdzam, że przeczytałem i zgadzam się z warunkami korzystania z usługi i polityką prywatności opisaną na stronie internetowej.",restAssuredSpan:"Spokojnie, twoje dane są zawsze u nas bezpieczne.",restAssuredText:" W każdej chwili możesz zaktualizować swoje preferencje, korzystając z linku do rezygnacji znajdującego się na dole każdego e-maila, który otrzymasz od nas. Traktujemy twoją prywatność poważnie i dbamy o twoje informacje z najwyższą starannością. Klikając powyższy przycisk, wyrażasz zgodę na przetwarzanie twoich informacji zgodnie z tymi warunkami.",netCurrentRevenue:"Aktualny dochód netto:",commonProfitsToday:"Wspólne zyski dzisiaj 10/05/23:",hurry:"Pośpiesz się! Pozostało tylko 13 miejsc dla nowych uczestników!",achieveYourFinancialTriumph:"Osiągnij swój finansowy tryumf: Platforma Turing Machine AI zamienia małe inwestycje w ogromne zyski!"},te={joinNow:"JETZT BEITRETEN! REGISTRIEREN SIE SICH SOFORT IM SYSTEM, UM IHREN PLATZ ZU SICHERN!",discover:"Entdecken Sie den Weg zum finanziellen Überfluss!",fullName:"Vollständiger Name",lastName:"Nachname",emailAddress:"E-Mail-Adresse",phoneNumber:"Telefonnummer",signUp:"ANMELDEN",byRegistering:"Mit der Registrierung bestätige ich, dass ich die Nutzungsbedingungen und Datenschutzrichtlinien auf der Website gelesen und akzeptiert habe.",restAssuredSpan:"Seien Sie versichert, Ihre Daten sind bei uns immer sicher geschützt.",netCurrentRevenue:"Nettoaktuelleinnahmen:",restAssuredText:"Sie können Ihre Präferenzen jederzeit aktualisieren, indem Sie den Abmeldelink am Ende jeder E-Mail, die Sie von uns erhalten, verwenden. Wir nehmen Ihre Privatsphäre ernst und behandeln Ihre Informationen mit größter Sorgfalt. Durch Klicken auf die obige Schaltfläche stimmen Sie der Verarbeitung Ihrer Informationen gemäß diesen Bedingungen zu.",commonProfitsToday:"Gemeinsame Gewinne heute 10/05/23:",hurry:"Beeilen Sie sich! Nur noch 13 Plätze für neue Teilnehmer verfügbar!",achieveYourFinancialTriumph:"Erreichen Sie Ihren finanziellen Triumph: Die Turing Machine AI-Plattform verwandelt kleine Investitionen in massive Gewinne!"},ne={joinNow:"¡ÚNETE AHORA! REGÍSTRATE INMEDIATAMENTE EN EL SISTEMA PARA ASEGURAR TU LUGAR!",discover:"¡Descubre el camino hacia la abundancia financiera!",fullName:"Nombre completo",lastName:"Apellido",emailAddress:"Dirección de correo electrónico",phoneNumber:"Número de teléfono",signUp:"REGÍSTRATE",byRegistering:"Al registrarme, confirmo que he leído y acepto los términos de servicio y la política de privacidad descritos en el sitio web.",restAssuredSpan:"Descanse tranquilo, sus datos siempre están protegidos con nosotros.",netCurrentRevenue:"Ingresos netos actuales:",restAssuredText:"Siéntase libre de actualizar sus preferencias en cualquier momento utilizando el enlace de cancelación de suscripción en la parte inferior de cualquier correo electrónico que reciba de nosotros. Tomamos su privacidad en serio y manejamos su información con el mayor cuidado. Al hacer clic en el botón de arriba, usted da su consentimiento para el procesamiento de su información de acuerdo con estos términos.",commonProfitsToday:"Ganancias comunes hoy 10/05/23:",hurry:"¡Apúrate! ¡Solo quedan 13 lugares para nuevos participantes!",achieveYourFinancialTriumph:"Logra tu triunfo financiero: ¡La plataforma Turing Machine AI convierte pequeñas inversiones en ganancias masivas!"},re={joinNow:"JOIN NOW! REGISTER IN THE SYSTEM IMMEDIATELY TO SECURE YOUR SPOT!",discover:"Discover the path to financial abundance!",fullName:"Full Name",lastName:"Last Name",emailAddress:"Email Address",phoneNumber:"Phone Number",signUp:"SIGN UP",byRegistering:"By registering, I confirm that I have read and agree to the terms of service and privacy policy outlined on the website.",restAssuredSpan:"Rest assured, your data is always securely protected with us.",restAssuredText:" Feel free to update your preferences at any time by using the unsubscribe link in the bottom of any email you receive from us. We take your privacy seriously and handle your information with the utmost care. By clicking the button above, you consent to the processing of your information in accordance with these terms.",netCurrentRevenue:"Net Current Revenue:",commonProfitsToday:"Common Profits Today 10/05/23:",hurry:"Hurry! Only 13 spots remaining for new participants!",achieveYourFinancialTriumph:"Achieve Your Financial Triumph: Turing Machine AI platform turns small investments into massive earnings!"},oe={en:{translation:re},de:{translation:te},es:{translation:ne},pl:{translation:ee}};e.use(V).init({resources:oe,lng:"en",interpolation:{escapeValue:!1}});const se=e.t("joinNow"),ae=e.t("discover"),ie=e.t("fullName"),ce=e.t("lastName"),ue=e.t("emailAddress"),me=e.t("phoneNumber"),le=e.t("signUp"),de=e.t("byRegistering"),he=e.t("restAssuredSpan"),pe=e.t("restAssuredText"),ye=e.t("netCurrentRevenue"),fe=e.t("commonProfitsToday"),ge=e.t("hurry"),Se=e.t("achieveYourFinancialTriumph"),Ne=document.querySelector(".currentRevenue"),Te=document.querySelector(".form-content-text"),ve=document.querySelector(".form-register-text"),Ae=document.querySelector(".userName"),be=document.querySelector(".userLastName"),Ee=document.querySelector(".email"),xe=document.querySelector(".input-phone"),Re=document.querySelector(".form-register-btn"),qe=document.querySelector(".Registering"),ze=document.querySelector(".restAssuredText"),we=document.querySelector(".restAssuredSpan"),Ce=document.querySelector(".profitsToday"),Ie=document.querySelector(".hurrySpots"),ke=document.querySelector(".yourFinancialTriumph");ke.textContent=Se;Ie.textContent=ge;Ce.textContent=fe;Ne.textContent=ye;we.textContent=he;ze.textContent=pe;qe.textContent=de;Te.textContent=se;Re.textContent=le;ve.textContent=ae;Ae.placeholder=ie;be.placeholder=ce;Ee.placeholder=ue;xe.placeholder=me;document.getElementById("sel1").addEventListener("change",t=>{const s=t.target.value;e.changeLanguage(s);const a=e.t("joinNow"),i=e.t("discover"),n=e.t("fullName"),r=e.t("lastName"),c=e.t("emailAddress"),x=e.t("phoneNumber"),R=e.t("signUp"),q=e.t("byRegistering"),z=e.t("restAssuredSpan"),w=e.t("restAssuredText"),C=e.t("netCurrentRevenue"),I=e.t("commonProfitsToday"),k=e.t("hurry"),j=e.t("achieveYourFinancialTriumph"),L=document.querySelector(".currentRevenue"),P=document.querySelector(".form-content-text"),M=document.querySelector(".form-register-text"),O=document.querySelector(".userName"),F=document.querySelector(".userLastName"),U=document.querySelector(".email"),Y=document.querySelector(".input-phone"),D=document.querySelector(".form-register-btn"),Z=document.querySelector(".Registering"),G=document.querySelector(".restAssuredText"),B=document.querySelector(".restAssuredSpan"),W=document.querySelector(".profitsToday"),$=document.querySelector(".hurrySpots"),H=document.querySelector(".yourFinancialTriumph");H.textContent=j,$.textContent=k,W.textContent=I,L.textContent=C,B.textContent=z,G.textContent=w,Z.textContent=q,P.textContent=a,D.textContent=R,M.textContent=i,O.placeholder=n,F.placeholder=r,U.placeholder=c,Y.placeholder=x});
//# sourceMappingURL=commonHelpers.js.map
