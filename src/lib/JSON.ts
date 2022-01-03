export default class JSON {
  toQueryParam(pr_json: any): string {
    return Object.keys(pr_json)
      .map((key) => {
        return encodeURIComponent(key) + "=" + encodeURIComponent(pr_json[key]);
      })
      .join("&");
  }
}
