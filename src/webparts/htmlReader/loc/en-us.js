define([], function () {
  return {
    PropertyPaneDescription:
      "This web part allows you to inject HTML code snippet into your SharePoint page. Please make sure your codes don't contain any JS scripts, or the web part will stop working until scripts are removed. The web part will also purify your code behind the scene, any tags outside of body will be automatically removed.",
    BasicGroupName: '---',
    DescriptionFieldLabel: 'Description Field',
    AppLocalEnvironmentSharePoint:
      'The app is running on your local environment as SharePoint web part',
    AppLocalEnvironmentTeams:
      'The app is running on your local environment as Microsoft Teams app',
    AppLocalEnvironmentOffice:
      'The app is running on your local environment in office.com',
    AppLocalEnvironmentOutlook:
      'The app is running on your local environment in Outlook',
    AppSharePointEnvironment:
      'The app is running on SharePoint page',
    AppTeamsTabEnvironment:
      'The app is running in Microsoft Teams',
    AppOfficeEnvironment:
      'The app is running in office.com',
    AppOutlookEnvironment:
      'The app is running in Outlook',
  };
});
