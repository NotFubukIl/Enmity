function X(e) {
    window.enmity.plugins.registerPlugin(e)
}
var J = "FriendInvites",
    A = "1.1.3",
    Q = "patch-1.0.1",
    Z = "Easily create a Discord friend invite link to make it easier for users to add you as a friend",
    O = [{
        name: "spin",
        id: "308440976723148800"
    }],
    ee = "#ff0069",
    te = "https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/FriendInvites.js",
    C = {
        name: J,
        version: A,
        build: Q,
        description: Z,
        authors: O,
        color: ee,
        sourceUrl: te
    },
    T;
(function(e) {
    e[e.BuiltIn = 0] = "BuiltIn", e[e.Guild = 1] = "Guild", e[e.DM = 2] = "DM"
})(T || (T = {}));
var b;
(function(e) {
    e[e.Chat = 1] = "Chat", e[e.User = 2] = "User", e[e.Message = 3] = "Message"
})(b || (b = {}));
var p;
(function(e) {
    e[e.BuiltIn = 0] = "BuiltIn", e[e.BuiltInText = 1] = "BuiltInText", e[e.BuiltInIntegration = 2] = "BuiltInIntegration", e[e.Bot = 3] = "Bot", e[e.Placeholder = 4] = "Placeholder"
})(p || (p = {}));
var U;
(function(e) {
    e[e.Role = 1] = "Role", e[e.User = 2] = "User"
})(U || (U = {}));
var x;
(function(e) {
    e[e.SubCommand = 1] = "SubCommand", e[e.SubCommandGroup = 2] = "SubCommandGroup", e[e.String = 3] = "String", e[e.Integer = 4] = "Integer", e[e.Boolean = 5] = "Boolean", e[e.User = 6] = "User", e[e.Channel = 7] = "Channel", e[e.Role = 8] = "Role", e[e.Mentionnable = 9] = "Mentionnable", e[e.Number = 10] = "Number", e[e.Attachment = 11] = "Attachment"
})(x || (x = {}));
var M;
(function(e) {
    e[e.ApplicationCommand = 2] = "ApplicationCommand", e[e.MessageComponent = 3] = "MessageComponent"
})(M || (M = {}));
const $ = {
    byProps: (...e) => window.enmity.modules.filters.byProps(...e),
    byName: (e, t) => window.enmity.modules.filters.byName(e, t),
    byTypeName: (e, t) => window.enmity.modules.filters.byTypeName(e, t),
    byDisplayName: (e, t) => window.enmity.modules.filters.byDisplayName(e, t)
};

function V(...e) {
    return window.enmity.modules.bulk(...e)
}

function _(...e) {
    return window.enmity.modules.getByKeyword(...e)
}
window.enmity.modules.common;

function g(e, t, i, s) {
    window.enmity.clyde.sendReply(e, t, i, s)
}
const ne = {
        id: "create-friend-invite",
        name: "createinvite",
        displayName: "createinvite",
        description: "Create a friend invite link",
        displayDescription: "Create a friend invite link",
        type: b.Chat,
        inputType: p.BuiltInText,
        options: [{
            name: "whisper",
            displayName: "whisper",
            description: "Only you can see the response",
            displayDescription: "Only you can see the response",
            type: x.Boolean,
            required: !1
        }],
        execute: async function(e, t) {
            var i, s, r, l;
            const w = e[e.findIndex(c => c.name === "whisper")];
            try {
                const c = await _("friendinvite").createFriendInvite();
                console.log(await _("friendinvite").createFriendInvite.toString());
                if (c)
                    if ((i = w == null ? void 0 : w.value) == null || i) {
                        g((s = t == null ? void 0 : t.channel.id) != null ? s : "0", `Your friend invite link is: discord.gg/${c.code}
Max uses: ${c.max_uses}
Expires: <t:${new Date(c.expires_at).getTime()/1e3}:R>`);
                        return
                    } else return {
                        content: `discord.gg/${c.code}`
                    };
                else console.log("[ createFriendInvite Response ]", c), g((r = t == null ? void 0 : t.channel.id) != null ? r : "0", "Something went wrong, please try again later. Fetch response sent to console.")
            } catch (c) {
                console.log("[ createFriendInvite Error ]", c), g((l = t == null ? void 0 : t.channel.id) != null ? l : "0", "An error occured while creating the friend invite. Check debug logs for more info.")
            }
        }
    },
    oe = {
        id: "list-friend-invites",
        name: "listinvites",
        displayName: "listinvites",
        description: "List your current friend invite links",
        displayDescription: "List your current friend invite links",
        type: b.Chat,
        inputType: p.BuiltInText,
        options: [{
            name: "whisper",
            displayName: "whisper",
            description: "Only you can see the response",
            displayDescription: "Only you can see the response",
            type: x.Boolean,
            required: !1
        }],
        execute: async function(e, t) {
            var i, s, r, l, w;
            const c = e[e.findIndex(d => d.name === "whisper")];
            try {
                const d = await _("friendinvite").getAllFriendInvites();
                if (d) {
                    const L = {
                        type: "rich",
                        title: "Friend Invites",
                        description: d.length == 0 ? "You have no friend invites!" : `${d.map(a=>`\`discord.gg/${a.code}\` - uses: ${a.uses}/${a.max_uses} - expires <t:${new Date(a.expires_at).getTime()/1e3}:R>`).join(`
`)}`,
                        footer: {
                            text: "Friend invites are mostly undocumented and any of these features may break at any time."
                        },
                        color: "0xff0069"
                    };
                    if ((i = c == null ? void 0 : c.value) == null || i) {
                        g((s = t == null ? void 0 : t.channel.id) != null ? s : "0", {
                            embeds: [L]
                        });
                        return
                    } else if (d.length == 0) {
                        g((r = t == null ? void 0 : t.channel.id) != null ? r : "0", "You have no friend invites!");
                        return
                    } else return {
                        content: `${d.map(a=>`\`discord.gg/${a.code}\` - uses: ${a.uses}/${a.max_uses} - expires <t:${new Date(a.expires_at).getTime()/1e3}:R>`).join(`
`)}`
                    }
                } else console.log("[ listFriendInvites Response ]", d), g((l = t == null ? void 0 : t.channel.id) != null ? l : "0", "Something went wrong, please try again later. Fetch response sent to console.")
            } catch (d) {
                console.log("[ listFriendInvites Error ]", d), g((w = t == null ? void 0 : t.channel.id) != null ? w : "0", "An error occured while fetching and listing friend invites. Check debug logs for more info.")
            }
        }
    },
    ie = {
        id: "revoke-friend-invites",
        name: "revokeinvites",
        displayName: "revokeinvites",
        description: "Revoke all of your friend invites (this is irreversible and will delete all of your friend invites)",
        displayDescription: "Revoke all of your friend invites (this is irreversible and will delete all of your friend invites)",
        type: b.Chat,
        inputType: p.BuiltInText,
        execute: async function(e, t) {
            var i, s, r;
            try {
                await _("friendinvite").revokeFriendInvites();
                const l = await _("friendinvite").getAllFriendInvites();
                if (l.length == 0) {
                    g((i = t == null ? void 0 : t.channel.id) != null ? i : "0", "All of your friend invites have been revoked.");
                    return
                } else console.log("[ revokeFriendInvites Response ]", l), g((s = t == null ? void 0 : t.channel.id) != null ? s : "0", "Something went wrong, please try again later. Fetch response sent to console.")
            } catch (l) {
                console.log("[ revokeFriendInvites Error ]", l), g((r = t == null ? void 0 : t.channel.id) != null ? r : "0", "An error occured while revoking friend invites. Check debug logs for more info.")
            }
        }
    },
    Y = [ne, oe, ie],
    h = window.enmity.modules.common.Constants;
window.enmity.modules.common.Clipboard, window.enmity.modules.common.Assets, window.enmity.modules.common.Messages, window.enmity.modules.common.Clyde, window.enmity.modules.common.Avatars;
const G = window.enmity.modules.common.Native,
    n = window.enmity.modules.common.React;
window.enmity.modules.common.Dispatcher;
const D = window.enmity.modules.common.Storage,
    F = window.enmity.modules.common.Toasts,
    I = window.enmity.modules.common.Dialog;
window.enmity.modules.common.Token;
const j = window.enmity.modules.common.REST;
window.enmity.modules.common.Settings, window.enmity.modules.common.Users;
const se = window.enmity.modules.common.Navigation;
window.enmity.modules.common.NavigationNative, window.enmity.modules.common.NavigationStack, window.enmity.modules.common.Theme, window.enmity.modules.common.Linking;
const z = window.enmity.modules.common.StyleSheet;
window.enmity.modules.common.ColorMap, window.enmity.modules.common.Components, window.enmity.modules.common.Locale, window.enmity.modules.common.Profiles, window.enmity.modules.common.Lodash, window.enmity.modules.common.Logger, window.enmity.modules.common.Flux, window.enmity.modules.common.SVG, window.enmity.modules.common.Scenes;
const {
    components: o
} = window.enmity;
o.Alert;
const re = o.Button;
o.FlatList;
const le = o.Image;
o.ImageBackground, o.KeyboardAvoidingView, o.Modal, o.Pressable, o.RefreshControl;
const ae = o.ScrollView;
o.SectionList, o.StatusBar, o.StyleSheet, o.Switch;
const y = o.Text;
o.TextInput, o.TouchableHighlight;
const S = o.TouchableOpacity;
o.TouchableWithoutFeedback, o.Touchable;
const f = o.View;
o.VirtualizedList, o.Form, o.FormArrow, o.FormCTA, o.FormCTAButton, o.FormCardSection, o.FormCheckbox;
const B = o.FormDivider;
o.FormHint, o.FormIcon, o.FormInput, o.FormLabel, o.FormRadio;
const m = o.FormRow,
    P = o.FormSection;
o.FormSelect, o.FormSubLabel;
const ce = o.FormSwitch;
o.FormTernaryCheckBox, o.FormText, o.FormTextColors, o.FormTextSizes;
const q = e => {
        let t = 0;
        for (let i in e) t++;
        return t
    },
    me = e => {
        let t = e.split(`
`).map(i => {
            if (i != "") return `"${i.replaceAll(":",'":"').replace(" ","")}",`
        });
        return t[0] = `{${t[0]}`, t[q(t)] = `${t[q(t)]}}`, t = t.join(""), t = t.replaceAll("undefined", ""), t = t.split("").reverse().join("").replace(",", "").split("").reverse().join(""), t
    };
async function de() {
    try {
        let e = await D.getItem("device_list");
        if (e) return JSON.parse(e);
        let t = (await j.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,
            i = me(t);
        await D.setItem("device_list", i);
        let s = await D.getItem("device_list");
        return JSON.parse(s)
    } catch (e) {
        console.warn(`[SpinsPlugins Local Error \u2014 Issue when getting devices: ${e}]`);
        return
    }
}
async function ue(e, t) {
    let i = await de();
    return `**[${e}] Debug Information**
> **Plugin Version:** ${t}
> **Software Version:** ${G.DCDDeviceManager.systemVersion}
> **Device:** ${i[G.DCDDeviceManager.device]}`
}

function u(e) {
    return window.enmity.assets.getIDByName(e)
}
const v = {
        Debug: u("debug"),
        Retry: u("ic_message_retry"),
        Failed: u("Small"),
        Cancel: u("ic_megaphone_nsfw_16px"),
        Delete: u("ic_message_delete"),
        Copy: u("toast_copy_link"),
        Open: u("ic_leave_stage"),
        Clipboard: u("pending-alert"),
        Debug_Command: {
            Sent: u("ic_application_command_24px"),
            Clock: u("clock")
        },
        Settings: {
            Toasts: {
                Context: u("toast_image_saved"),
                Settings: u("ic_selection_checked_24px")
            },
            Debug: u("ic_rulebook_16px")
        }
    },
    N = e => {
        F.open({
            content: `Copied ${e} to clipboard.`,
            source: v.Clipboard
        })
    },
    {
        native: E
    } = window.enmity;

function ge() {
    E.reload()
}
E.version, E.build, E.device, E.version;
async function we({
    manifest: e
}) {
    const t = `${e.sourceUrl}?${Math.floor(Math.random()*1001)}.js`,
        i = await (await j.get(t)).text;
    let s = i.match(/\d\.\d\.\d+/g),
        r = i.match(/patch\-\d\.\d\.\d+/g);
    return !s || !r ? W(e.name, e.version) : (s = s[0], r = r[0], s != e.version ? H(t, s, r.split("-")[1], e, !1) : r != e.build ? H(t, s, r.split("-")[1], e, !0) : W(e.name, e.version))
}
const H = (e, t, i, s, r) => {
        const l = r ? i : t;
        I.show({
            title: "Update found",
            body: `A newer ${r?"build":"version"} is available for ${s.name}. ${r?`
The version will remain at ${t}, but the build will update to ${i}.`:""}
Would you like to install ${r?`build \`${i}\``:`version \`${t}\``}  now?`,
            confirmText: "Update",
            cancelText: "Not now",
            onConfirm: () => ve(e, l, s, r)
        })
    },
    W = (e, t) => {
        console.log(`[${e}] Plugin is on the latest version, which is ${t}`), F.open({
            content: `${e} is on latest version (${t})`,
            source: v.Settings.Toasts.Settings
        })
    };
async function ve(e, t, i, s) {
    window.enmity.plugins.installPlugin(e, ({
        data: r
    }) => {
        r == "installed_plugin" || r == "overridden_plugin" ? I.show({
            title: `Updated ${i.name}`,
            body: `Successfully updated to ${s?"build":"version"} \`${t}\`. 
Would you like to reload Discord now?`,
            confirmText: "Yep!",
            cancelText: "Not now",
            onConfirm: () => {
                ge()
            }
        }) : I.show({
            title: "Error",
            body: `Something went wrong while updating ${i.name}.`,
            confirmText: "Report this issue",
            cancelText: "Cancel",
            onConfirm: () => {
                Router.openURL(`https://github.com/spinfal/enmity-plugins/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D%20${i.name}%20Update%20Error%3A%20${s?`b${version}`:`v${version}`}`)
            },
            onCancel: () => {
                I.close()
            }
        })
    })
};
const R = window.enmity.modules.common.Components.General.Animated,
    [k, he] = V($.byProps("transitionToGuild"), $.byProps("setString"));
var ye = ({
    manifest: e
}) => {
    const t = z.createThemedStyleSheet({
            container: {
                paddingTop: 30,
                paddingLeft: 20,
                marginBottom: -5,
                flexDirection: "row"
            },
            text_container: {
                paddingLeft: 15,
                paddingTop: 5,
                flexDirection: "column",
                flexWrap: "wrap"
            },
            image: {
                width: 75,
                height: 75,
                borderRadius: 10
            },
            main_text: {
                opacity: .975,
                letterSpacing: .25
            },
            header: {
                color: h.ThemeColorMap.HEADER_PRIMARY,
                fontFamily: h.Fonts.DISPLAY_BOLD,
                fontSize: 25,
                letterSpacing: .25
            },
            sub_header: {
                color: h.ThemeColorMap.HEADER_SECONDARY,
                opacity: .975,
                fontSize: 12.75
            }
        }),
        i = n.useRef(new R.Value(1)).current,
        s = () => {
            R.spring(i, {
                toValue: 1.1,
                duration: 250,
                useNativeDriver: !0
            }).start()
        },
        r = () => {
            R.spring(i, {
                toValue: 1,
                duration: 250,
                useNativeDriver: !0
            }).start()
        },
        l = () => {
            k.openURL("https://spin.rip/")
        },
        w = {
            transform: [{
                scale: i
            }]
        };
    return n.createElement(n.Fragment, null, n.createElement(f, {
        style: t.container
    }, n.createElement(S, {
        onPress: l,
        onPressIn: s,
        onPressOut: r
    }, n.createElement(R.View, {
        style: [w]
    }, n.createElement(le, {
        style: [t.image],
        source: {
            uri: "https://cdn.spin.rip/r/l9uevwe4ia0.jpg"
        }
    }))), n.createElement(f, {
        style: t.text_container
    }, n.createElement(S, {
        onPress: () => {
            k.openURL(e.sourceUrl)
        }
    }, n.createElement(y, {
        style: [t.main_text, t.header]
    }, e.name, " ")), n.createElement(f, {
        style: {
            flexDirection: "row"
        }
    }, n.createElement(y, {
        style: [t.main_text, t.sub_header]
    }, "A plugin by"), n.createElement(S, {
        onPress: () => {
            k.openURL("https://spin.rip/")
        }
    }, n.createElement(y, {
        style: [t.main_text, t.sub_header, {
            paddingLeft: 4,
            fontFamily: h.Fonts.DISPLAY_BOLD
        }]
    }, e.authors[0].name))), n.createElement(f, {
        style: {
            flexDirection: "row"
        }
    }, n.createElement(y, {
        style: [t.main_text, t.sub_header]
    }, "Settings page by"), n.createElement(S, {
        onPress: () => {
            k.openURL("https://github.com/acquitelol/")
        }
    }, n.createElement(y, {
        style: [t.main_text, t.sub_header, {
            paddingLeft: 4,
            fontFamily: h.Fonts.DISPLAY_BOLD
        }]
    }, "Acquite <3"))), n.createElement(f, null, n.createElement(S, {
        style: {
            flexDirection: "row"
        },
        onPress: () => {
            he.setString(`**${e.name}** v${e.version}`), N("plugin name and version")
        }
    }, n.createElement(y, {
        style: [t.main_text, t.sub_header]
    }, "Version:"), n.createElement(y, {
        style: [t.main_text, t.sub_header, {
            paddingLeft: 4,
            fontFamily: h.Fonts.DISPLAY_BOLD
        }]
    }, e.version, " "))))))
};
const [fe, K] = V($.byProps("transitionToGuild"), $.byProps("setString"));
var be = ({
    manifest: e,
    settings: t,
    hasToasts: i,
    section: s,
    commands: r
}) => {
    const l = z.createThemedStyleSheet({
            icon: {
                color: h.ThemeColorMap.INTERACTIVE_NORMAL
            },
            item: {
                color: h.ThemeColorMap.TEXT_MUTED
            },
            text_container: {
                display: "flex",
                flexDirection: "column"
            }
        }),
        [w, c] = n.useState(),
        [d, L] = n.useState();
    return n.createElement(n.Fragment, null, n.createElement(ae, {
        onTouchStart: a => {
            c(a.nativeEvent.pageX), L(a.nativeEvent.pageY)
        },
        onTouchEnd: a => {
            w - a.nativeEvent.pageX < -100 && d - a.nativeEvent.pageY < 40 && d - a.nativeEvent.pageY > -40 && se.pop()
        }
    }, n.createElement(ye, {
        manifest: e
    }), s, r && n.createElement(P, {
        title: "Plugin Commands"
    }, n.createElement(f, {
        style: l.text_container
    }, r.map(a => n.createElement(re, {
        style: l.command,
        key: a,
        onPress: function() {
            K.setString(`/${a}`), N(`the command ${a}`)
        },
        title: `/${a}`
    }, "/", a)))), n.createElement(P, {
        title: "Utility"
    }, i && n.createElement(n.Fragment, null, n.createElement(m, {
        label: "Initialization Toasts",
        leading: n.createElement(m.Icon, {
            style: l.icon,
            source: v.Settings.Toasts.Context
        }),
        subLabel: `If available, show toasts when ${e.name} is starting`,
        trailing: n.createElement(ce, {
            value: t.getBoolean(`${e.name}-toastEnable`, !1),
            onValueChange: () => {
                t.toggle(`${e.name}-toastEnable`, !1), F.open({
                    content: `Successfully ${t.getBoolean(`${e.name}-toastEnable`,!1)?"enabled":"disabled"} initialization toasts.`,
                    source: v.Settings.Toasts.Settings
                })
            }
        })
    }), n.createElement(B, null)), n.createElement(m, {
        label: "Copy Debug Info",
        subLabel: `Copy useful debug information of ${e.name} to clipboard.`,
        leading: n.createElement(m.Icon, {
            style: l.icon,
            source: v.Settings.Debug
        }),
        trailing: m.Arrow,
        onPress: async function() {
            K.setString(await ue(e.name, e.version)), N("plugin debug information")
        }
    }), n.createElement(B, null), n.createElement(m, {
        label: "Clear Device List Cache",
        subLabel: "Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",
        leading: n.createElement(m.Icon, {
            style: l.icon,
            source: v.Delete
        }),
        trailing: m.Arrow,
        onPress: async function() {
            await D.removeItem("device_list"), F.open({
                content: "Cleared device list storage.",
                source: v.Settings.Toasts.Settings
            })
        }
    })), n.createElement(P, {
        title: "Source"
    }, n.createElement(m, {
        label: "Check for Updates",
        subLabel: `Check for any plugin updates for ${e.name}.`,
        leading: n.createElement(m.Icon, {
            style: l.icon,
            source: v.Copy
        }),
        trailing: m.Arrow,
        onPress: () => {
            we({
                manifest: e
            })
        }
    }), n.createElement(B, null), n.createElement(m, {
        label: "Source",
        subLabel: `View ${e.name} source code`,
        leading: n.createElement(m.Icon, {
            style: l.icon,
            source: v.Open
        }),
        trailing: m.Arrow,
        onPress: () => {
            fe.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${e.name}`)
        }
    })), n.createElement(m, {
        label: `Plugin Version: ${e.version}`
    })))
};
const pe = {
    ...C,
    onStart() {
        this.commands = Y
    },
    onStop() {
        this.commands = []
    },
    patches: [],
    getSettingsPanel({
        settings: e
    }) {
        return n.createElement(be, {
            manifest: C,
            settings: e,
            hasToasts: !1,
            section: null,
            commands: Y.map(t => t.name)
        })
    }
};
X(pe);
