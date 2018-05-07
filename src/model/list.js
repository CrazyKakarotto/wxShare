const queryList = (payload, cb) => {
    cb({
      code: '1000',
      message: '操作成功',
      resultData: {
        createTime: '2018-4-10',
        repayTypeStr: '挂账',
        repayId: '11116666',
        shouldAmount: 950,
        amount: 1000,
        surplusAmount: 50,
        createPersonName: '王大伟',
      }
    })
};
export {
    queryList
}
