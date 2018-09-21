import popupPlugin from './Popup'
import alertPlugin from './Alert'
import confirmPlugin from './Confirm'
import actionSheetPlugin from './ActionSheet'

const plugin = {
    install: function (Vue) {
        let popup = new (Vue.extend(popupPlugin));
        let alert = new (Vue.extend(alertPlugin));
        let confirm = new (Vue.extend(confirmPlugin));
        let actionSheet = new (Vue.extend(actionSheetPlugin));
        document.getElementsByTagName('body')[0].appendChild(popup.$mount().$el);
        document.getElementsByTagName('body')[0].appendChild(alert.$mount().$el);
        document.getElementsByTagName('body')[0].appendChild(confirm.$mount().$el);
        document.getElementsByTagName('body')[0].appendChild(actionSheet.$mount().$el);
        Vue.prototype.$pop = (option, callback) => {
            if (typeof option === 'string') {
                popup.msg = option;
            } else if (typeof option === 'object') {
                popup.option = {...popup.option, ...option};
            }
            popup.callback = () => {
                callback && callback();
            };
            popup.isShow = true;
        };
        Vue.prototype.$alert = (option, callback) => {
            if (typeof option === 'object') {
                alert.option = {...alert.option, ...option};
            }
            alert.callback = () => {
                callback && callback();
            };
            alert.isShow = true;
        };
        Vue.prototype.$confirm = (option, callback) => {
            if (typeof option === 'object') {
                confirm.option = {...confirm.option, ...option};
            }
            confirm.callback = (index) => {
                callback && callback(index);
            };
            confirm.isShow = true;
        };
        Vue.prototype.$actionSheet = (option, callback) => {
            if (typeof option === 'object') {
                actionSheet.option = {...actionSheet.option, ...option};
            }
            actionSheet.callback = (item, index) => {
                callback && callback(item, index);
            };
            actionSheet.isShow = true;
        };
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}

export default plugin