import { CometChat } from "@cometchat-pro/chat";

var appID = "865800f1567fc2";
var appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion('eu').build();

CometChat.init(appID, appSetting).then(
    () => {
        console.log("Initialization completed successfully");

        var UID = "superhero1";
        var apiKey = "ae06b86015923a99d40abcddde0e622f23d284e1";


        CometChat.login(UID, apiKey).then(
            user => {
                console.log("Login Successful:", { user });
            },
            error => {
                console.log("Login failed with exception:", { error });
            }
        );
    },
    error => {
        console.log("Initialization failed with error:", error);

    }
);



export function isIntialized() {
    return CometChat.isInitialized();
}

export class UserManager {
    limi
    usersRequest = null;
    
    constructor(object) {
        this.usersRequest = new CometChat.UsersRequestBuilder().setLimit(object.limit).build();
    }
   
    getUsersList() {        
        return this.usersRequest.fetchNext();
    }
}
